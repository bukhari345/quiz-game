import React, { useState } from "react";

const PracticeQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      id: 3,
      question: "Who wrote 'Hamlet'?",
      options: [
        "Charles Dickens",
        "J.K. Rowling",
        "Mark Twain",
        "William Shakespeare",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      id: 4,
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      correctAnswer: "2",
    },
    {
      id: 5,
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Silver", "Hydrogen"],
      correctAnswer: "Oxygen",
    },
    {
      id: 6,
      question: "What is the capital city of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correctAnswer: "Tokyo",
    },
  ];

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const closeModal = () => {
    setShowResults(false);
  };

  const renderResults = () => {
    return questions.map((question) => (
      <div key={question.id} style={{ marginBottom: "20px" }}>
        <h3>{question.question}</h3>
        <p>Your answer: {selectedAnswers[question.id]}</p>
        <p>Correct answer: {question.correctAnswer}</p>
        <p
          style={{
            color:
              selectedAnswers[question.id] === question.correctAnswer
                ? "green"
                : "red",
          }}
        >
          {selectedAnswers[question.id] === question.correctAnswer
            ? "Correct"
            : "Incorrect"}
        </p>
      </div>
    ));
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Practice Quiz</h2>
      {!showResults ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {questions.map((question) => (
            <div key={question.id} style={questionContainerStyle}>
              <h3>{question.question}</h3>
              <div style={optionsContainerStyle}>
                {question.options.map((option) => (
                  <label key={option} style={optionLabelStyle}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      onChange={() => handleAnswerChange(question.id, option)}
                      checked={selectedAnswers[question.id] === option}
                      style={radioStyle}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="submit" style={submitButtonStyle}>
            Submit
          </button>
        </form>
      ) : (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>Results</h2>
            {renderResults()}
            <button onClick={closeModal} style={closeButtonStyle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  fontFamily: "'Roboto', sans-serif",
  maxWidth: "800px",

  margin: "0 auto",
  backgroundColor: "blue",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "30px",
  color: "white",
};

const questionContainerStyle = {
  marginBottom: "20px",
  backgroundColor: "#fff",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
};

const optionsContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const optionLabelStyle = {
  marginRight: "20px",
  flex: "1 1 45%",
  display: "flex",
  alignItems: "center",
};

const radioStyle = {
  marginRight: "10px",
};

const submitButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  display: "block",
  margin: "20px auto 0",
  transition: "background-color 0.3s ease",
};

submitButtonStyle[":hover"] = {
  backgroundColor: "#0056b3",
};

const closeButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "20px",
  transition: "background-color 0.3s ease",
};

closeButtonStyle[":hover"] = {
  backgroundColor: "#c82333",
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "50%",
  textAlign: "center",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

export default PracticeQuiz;
