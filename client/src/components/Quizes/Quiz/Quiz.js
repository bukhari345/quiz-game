// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./quiz.module.css";
import { likeQuiz } from "../../../actions/quiz";
import { useHistory } from "react-router-dom";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";

function Quiz({ quiz }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const openQuizDetailsPage = () => {
    history.push(`/quizes/${quiz._id}`);
  };
  const Likes = () => {
    if (quiz.likesCount.length > 0) {
      return quiz.likesCount.find((like) => like === user?.result?._id) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {quiz.likesCount.length > 2
            ? isLanguageEnglish
              ? `You and ${quiz.likesCount.length - 1} others`
              : `Ty i ${quiz.likesCount.length - 1} innych`
            : isLanguageEnglish
            ? `${quiz.likesCount.length} like${
                quiz.likesCount.length > 1 ? "s" : ""
              }`
            : `${quiz.likesCount.length} osób polubiło`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{quiz.likesCount.length}{" "}
          {quiz.likesCount.length === 1
            ? isLanguageEnglish
              ? "Like"
              : "Polubienie"
            : isLanguageEnglish
            ? "Likes"
            : "Polubienia"}
        </>
      );
    }
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <div className={styles["quiz-card"]}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${quiz.backgroundImage})` }}
      >
        <div className={styles["overlay"]}>
          <h3 className={styles["quiz-creator"]}>{quiz.creatorName}</h3>
          <h3 className={styles["quiz-date"]}>
            {moment(quiz.dateCreated).fromNow()}
          </h3>
          <h3 className={styles["quiz-question-number"]}>
            {isLanguageEnglish ? "Questions:" : "Pytania:"}{" "}
            {quiz.numberOfQuestions}
          </h3>
        </div>
      </div>
      <div className={styles["card-body"]}>
        <h2 className={styles["quiz-title"]}>{quiz.name}</h2>
        <p className={styles["quiz-description"]}>{quiz.description}</p>
        <h4 className={styles["quiz-tags"]}>
          {quiz.tags.map((tag) => `#${tag} `)}
        </h4>
        <div className={styles["card-buttons"]}>
          <button
            className={styles["like-button"]}
            onClick={() => dispatch(likeQuiz(quiz._id))}
          >
            <Likes />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
