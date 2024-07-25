// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { createPlayerResult } from "../../../actions/playerResult";
import { addPlayer } from "../../../actions/game";
import styles from "./joinGame.module.css";
import characterImage from "../../../assets/Characters.png";
import Navbar from "../../Navbar/Navbar";

function JoinGame() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const [isPlayerAdded, setIsPlayerAdded] = useState(false);
  const pinRef = useRef("");
  const history = useHistory();
  const socket = useSelector((state) => state.socket.socket);
  // const true = useSelector((state) => state.language.isEnglish);

  useEffect(() => {
    socket?.on("move-to-game-page", (gameId) => {
      dispatch(
        createPlayerResult({
          playerId: user.result._id,
          gameId: gameId,
          score: 0,
          answers: [],
        })
      );
      history.push(`/games/player/${gameId}`);
    });
  }, [socket, dispatch, history, user.result._id]);

  const result = (message, playerId, gameId) => {
    console.log("message", message, playerId, gameId);
    if (message === "correct") {
      dispatch(addPlayer(gameId, playerId));
      setIsPlayerAdded(true);
    } else {
      alert("You entered the wrong pin or the game does not exist");
    }
  };

  const joinGame = () => {
    socket.emit(
      "add-player",
      user.result,
      socket.id,
      pinRef.current.value,
      (message, playerId, gameId) => {
        result(message, playerId, gameId);
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        {!isPlayerAdded ? (
          <div className={styles.section}>
            <h2>{true ? "Join game" : "Dołącz do gry"}</h2>
            <input
              type="text"
              className={styles.customplaceholder}
              ref={pinRef}
              placeholder={true ? "Write here a pin" : "Wpisz tutaj pin"}
            />
            <button onClick={joinGame}>{true ? "Send" : "Wyślij"}</button>
            <img
              src={characterImage}
              alt="Character"
              className={styles.characterImage}
            />
          </div>
        ) : (
          <div className={styles.section}>
            <h2>{true ? "You joined the game" : "Dołączyłeś do gry"}</h2>
            <h4>
              {true
                ? "Waiting on a host to start the game"
                : "Zaczekaj na rozpoczęcie gry przez hosta"}
            </h4>
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
}

export default JoinGame;
