import React, { useEffect, useState } from "react";
import MyQuiz from "./MyQuiz/MyQuiz";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherQuizes, createQuiz } from "../../actions/quiz";
import styles from "./myQuizes.module.css";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function MyQuizes() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const [quizData, setQuizData] = useState({
    name: "",
    creatorName: `${user?.result.firstName} ${user?.result.lastName}`,
    backgroundImage: "",
    description: "",
    pointsPerQuestion: 1,
    isPublic: true,
    tags: [],
    questionList: [],
  });

  const [isQuizPublic, setIsQuizPublic] = useState(true);

  useEffect(() => {
    dispatch(getTeacherQuizes(user.result._id));
  }, [dispatch]);

  const { quizes } = useSelector((state) => state.quiz);

  const handleQuizSubmit = () => {
    dispatch(createQuiz(quizData, history));
  };

  const handleQuizChange = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className={styles["quizes-list"]}>
        <div
          className={styles["quiz-settings"]}
          style={{ border: "5px solid blue" }}
        >
          <h2 style={{ textAlign: "center" }}>
            {isLanguageEnglish ? "Create new quiz" : "Stwórz nowy quiz"}
          </h2>
          <div className={styles["quiz-form"]}>
            <div className={styles["option-label"]}>
              <label style={{ color: "black", fontWeight: "bold" }}>
                {isLanguageEnglish ? "Title" : "Nazwa"}
              </label>
            </div>
            <input
              className={styles["option-label-input"]}
              value={quizData.name}
              type="text"
              name="name"
              onChange={handleQuizChange}
            />
            <div className={styles["option-label"]}>
              <label style={{ color: "black", fontWeight: "bold" }}>
                {isLanguageEnglish ? "Description" : "Opis"}
              </label>
            </div>
            <input
              value={quizData.description}
              className={styles["option-label-input"]}
              type="text"
              name="description"
              onChange={handleQuizChange}
            />
            <div className={styles["option-buttons"]}>
              <button
                onClick={() => {
                  setIsQuizPublic(true);
                  setQuizData({ ...quizData, isPublic: true });
                }}
                className={styles["option-button"]}
                style={{
                  backgroundColor: isQuizPublic ? "blue" : "inherit",
                  color: isQuizPublic ? "white" : "rgb(110, 110, 110)",
                }}
              >
                {isLanguageEnglish ? "Public" : "Publiczny"}
              </button>
              <button
                onClick={() => {
                  setIsQuizPublic(false);
                  setQuizData({ ...quizData, isPublic: false });
                }}
                className={styles["option-button"]}
                style={{
                  backgroundColor: isQuizPublic ? "white" : "white",
                  color: isQuizPublic ? "black" : "white",
                }}
              >
                {isLanguageEnglish ? "Private" : "Prywatny"}
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{
                  alignItems: "end",
                  backgroundColor: "green",
                  padding: "10px",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={handleQuizSubmit}
              >
                {isLanguageEnglish ? "Create new quiz" : "Stwórz nowy quiz"}
              </button>
            </div>
          </div>
        </div>
        {quizes.map((quiz) => (
          <MyQuiz key={quiz._id} quiz={quiz} />
        ))}
      </div>{" "}
    </>
  );
}

export default MyQuizes;
