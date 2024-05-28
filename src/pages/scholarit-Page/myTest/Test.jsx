import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quiz } from "../../../data/landingpageQuestions";
import { Progress } from "antd";
import "./Test.css";
import { Button } from "@mui/material";

const Quiz = () => {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onClickPrevious = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== 0) {
      setActiveQuestion((prev) => prev - 1);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <Progress percent={((activeQuestion + 1) / questions.length) * 100} />
          <h2 className="question_topic">{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div>
            <button
              className="flex-left"
              onClick={onClickPrevious}
              disabled={activeQuestion === 0}
            >
              Previous
            </button>
            <button
              className="flex-right"
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <div className="card">
            <div className="circle">
              <i className="checkmark">✓</i>
            </div>
            <h1>Success</h1>
            <p>
              We received your survey
              <br /> This will help us personalize your experience!
            </p>
            <Button type="submit" onClick={() => navigate("/login")}>
              Go to Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
