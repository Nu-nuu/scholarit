import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import "./quizDetailCarousel.css";

const QuizDetailCarousel = ({
  questions,
  selectedAnswers,
  onOptionChange,
  currentQuestionIndex,
  onNext,
  onPrev,
  isPopup,
  onIndexClick,
}) => {
  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  if (questions.length === 0) {
    return null; // Don't render the Carousel if there are no questions
  }

  const handleOptionChange = (event) => {
    onOptionChange(event.target.value, currentQuestionIndex);
    onIndexClick(currentQuestionIndex);
  };

  return (
    <div className="quizdetail_carousel">
      <button className="prev-button" onClick={handlePrev}>
        &lt;
      </button>
      <div className="question">
        <h3
          style={{
            fontWeight: "500",
            fontSize: "25px",
            lineHeight: "120%",
            margin: "0",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          Question {currentQuestionIndex + 1}:{" "}
          {questions[currentQuestionIndex]?.question}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <p className="txt_options">Options:</p>
          {!isPopup && (
            <RadioGroup
              name={`question-${currentQuestionIndex + 1}`}
              className="radiogroup"
              onChange={handleOptionChange}
              value={selectedAnswers[currentQuestionIndex]}
            >
              {questions[currentQuestionIndex]?.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={`${String.fromCharCode(65 + index)}. ${option}`}
                  // checked={
                  //     isPopup &&
                  //     (option ===
                  //         questions[currentQuestionIndex]
                  //             ?.correctAnswer ||
                  //         option ===
                  //             questions[currentQuestionIndex]
                  //                 ?.selectedAnswer)
                  // }
                  // sx={{
                  //     color:
                  //         isPopup &&
                  //         (option ===
                  //         questions[currentQuestionIndex]
                  //             ?.correctAnswer
                  //             ? "green"
                  //             : option ===
                  //               questions[
                  //                   currentQuestionIndex
                  //               ]?.selectedAnswer
                  //             ? "red"
                  //             : undefined),
                  // }}
                />
              ))}
            </RadioGroup>
          )}
          {isPopup && (
            <RadioGroup
              name={`question-${currentQuestionIndex + 1}`}
              className="radiogroup"
              onChange={handleOptionChange}
              value={selectedAnswers[currentQuestionIndex]}
            >
              {questions[currentQuestionIndex]?.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={`${String.fromCharCode(65 + index)}. ${option}`}
                  checked={
                    isPopup &&
                    (option ===
                      questions[currentQuestionIndex]?.correctAnswer ||
                      option ===
                        questions[currentQuestionIndex]?.selectedAnswer)
                  }
                  sx={{
                    color:
                      isPopup &&
                      (option === questions[currentQuestionIndex]?.correctAnswer
                        ? "green"
                        : option ===
                          questions[currentQuestionIndex]?.selectedAnswer
                        ? "red"
                        : undefined),
                  }}
                />
              ))}
            </RadioGroup>
          )}
        </div>
        {isPopup && (
          <div>
            Correct Answer:{" "}
            <span style={{ color: "green" }}>
              {questions[currentQuestionIndex]?.correctAnswer}
            </span>
          </div>
        )}
      </div>
      <button className="next-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default QuizDetailCarousel;
