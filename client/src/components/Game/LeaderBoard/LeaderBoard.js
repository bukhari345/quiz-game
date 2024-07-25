// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./leader.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlayer } from "../../../actions/playerResult";
import html2canvas from "html2canvas";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { playerData } = useSelector((state) => state.playerResults);
  console.log("🚀 ~ Leaderboard ~ playerData:", playerData);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const members = [
    {
      rank: 6,
      name: "Irem",
      score: 953,
      avatar:
        "https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_960_720.png",
      change: "up",
    },
    {
      rank: 7,
      name: "Sara",
      score: 943,
      avatar:
        "https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_960_720.png",
      change: "up",
    },
    {
      rank: 8,
      name: "Fatima",
      score: 914,
      avatar:
        "https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_960_720.png",
      change: "down",
    },
    {
      rank: 9,
      name: "Shiza",
      score: 896,
      avatar:
        "https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_960_720.png",
      change: "down",
    },
    {
      rank: 10,
      name: "Kashif",
      score: 848,
      avatar:
        "https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_960_720.png",
      change: "down",
    },
  ];

  useEffect(() => {
    dispatch(getPlayer(user.result._id));
  }, []);

  const downloadScreenshot = () => {
    // @ts-ignore
    html2canvas(document.querySelector(".leaderboard")).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "leaderboard.png";
      link.click();
    });
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h1>LEADERBOARD</h1>
        <button onClick={downloadScreenshot} className="download-button">
          Download
        </button>
      </div>
      <div className="leaderboard-content">
        <div className="top-members">
          <h2>Top Student</h2>
          <div className="top-three">
            <div className="member">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png"
                alt="Yashma"
                className="avatar"
              />
              <p>Yashma</p>
              <p>Level 2</p>
            </div>
            <div className="member crown">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt="Irfan Ali"
                className="avatar"
              />
              <p>{user.result.firstName}</p>
              <p>20{playerData?.score}</p>
            </div>
            <div className="member">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png"
                alt="Ahmer"
                className="avatar"
              />
              <p>Ahmer</p>
              <p>Level 3</p>
            </div>
          </div>
          <div className="scores">
            <div className="score first">
              <span>1</span>
              <p>{user.result.firstName}</p>
              <p>20{playerData?.score}</p>
            </div>
            <div className="score second">
              <span>2</span>
              <p>Yashma</p>
              <p>1932</p>
            </div>
            <div className="score third">
              <span>3</span>
              <p>Ahmer</p>
              <p>1431</p>
            </div>
          </div>
        </div>
        <div className="other-members">
          <h2>Other Members</h2>
          <ul>
            {members.map((member, index) => (
              <li key={index} className="member-item">
                <span className={`rank ${member.change}`}>{member.rank}</span>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="member-avatar"
                />
                <span className="member-name">{member.name}</span>
                <span className="member-score">{member.score}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
