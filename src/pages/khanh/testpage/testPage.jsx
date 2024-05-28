import React, { useState, useEffect } from "react";

import "./testPage.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Swal from "sweetalert2"; // Import SweetAlert2
import CountdownTimer from "../timer/countdownTimer";
import { useSelector, useDispatch } from "react-redux";
import { quizDetailSelector } from "../../../store/sellectors";
import { getQuizByIdThunk } from "../../../store/apiThunk/quizThunk";

import { useSearchParams } from "react-router-dom";
import { createQuizAttemptThunk } from "../../../store/apiThunk/quizAttemptThunk";

//////////////////////////////////////////////////////////////////////////////////////////////////////
export default function TestPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);


  const quizDetail = useSelector(quizDetailSelector);
  useEffect(() => {
    dispatch(getQuizByIdThunk(id));
  }, []);

  const [point, setPoint] = useState(0);

  const handleSubmit = () => {
    if (selectedOptions?.length === quizDetail?.questions?.length) {
      // All questions have been answered, you can dispatch your action here.
      try {
        dispatch(
          createQuizAttemptThunk({
            quizID: id,
            questions: selectedOptions,
          })
        ).then((response) => {
          setPoint(response.payload.score);
          console.log(response.payload);
          setQuizSubmitted(true);
          // Success message
          Swal.fire({
            title: "Success!!",
            text: "You have finished the quiz successfully!!",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            background: "white",
            timer: 1500,
            timerProgressBar: true,
            scrollbarPadding: false,
          });
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      // Not all questions have been answered, show an error message.
      Swal.fire({
        title: "Error",
        text: "Please answer all the questions!!",
        icon: "error",
        showCancelButton: false,
        showConfirmButton: false,
        background: "white",
        timer: 1500,
        timerProgressBar: true,
        scrollbarPadding: false,
      });
    }
  };

  const handleOptionSelect = (questionId, selectedOption) => {
    if (!quizSubmitted) {
    setSelectedOptions((prevSelectedOptions) => {
      // Create a copy of the previous selected options array
      const updatedSelectedOptions = [...prevSelectedOptions];

      // Find the index of the question or add it if not already in the array
      const questionIndex = updatedSelectedOptions.findIndex(
        (item) => item.questionId === questionId
      );

      if (questionIndex === -1) {
        updatedSelectedOptions.push({ questionId, answer: selectedOption });
      } else {
        // Update the selected option for the question
        updatedSelectedOptions[questionIndex].answer = selectedOption;
      }

      setAnsweredQuestions((prevAnsweredQuestions) => [
        ...new Set([...prevAnsweredQuestions, questionId]),
      ]);

      return updatedSelectedOptions;
    });
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  const scrollPageUp = () => {
    window.scroll(0, 0); // Scroll to the top of the page
  };

  const scrollPageDown = () => {
    window.scroll(0, document.body.scrollHeight); // Scroll to the bottom of the page
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="testPage-container">
      <div className="testPage-item1">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 style={{ fontSize: "60px", marginRight: "20px" }}>
              Final Exam
            </h1>
            <p style={{ fontSize: "30px" }}>{quizDetail.name}</p>
          </div>
          <div>
            <h2 style={{ width: "240px" }}>
              {/* <CountdownTimer duration={quizDetail.duration} /> */}
              <CountdownTimer />
            </h2>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div
        className="testPage-item2"
        style={{ fontSize: "30px", color: "black" }}
      >
        Total Point:
        <div className="question-numbers">
          <div>
            <p style={{ paddingTop: "30px" }}>
              <span
                style={{
                  backgroundColor: "#FF911E",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                }}
              ></span>
            </p>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="testPage-item3">
        {quizDetail.questions?.map((question, index) => {
          const optionsArray = [];
          for (let i = 1; i <= 10; i++) {
            const optionKey = `option${i}`;
            if (question[optionKey]) {
              optionsArray.push(question[optionKey]);
            } else {
              break;
            }
          }
          return (
            <div
              key={question.id}
              style={{
                fontSize: "20px",
                marginBottom: "80px",
              }}
              id={`question-${index + 1}`} // Add an id attribute
            >
              <div
                style={{
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <p
                  style={{
                    fontSize: "25px",
                    backgroundColor: "#192a56",
                    padding: "20px 20px",
                  }}
                >
                  Question {index + 1}
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    backgroundColor: "#5D6DA0",
                    padding: "20px 20px",
                  }}
                >
                  {question.text}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "20px",
                  padding: "30px 0px 0px 0px",
                  alignItems: "center",
                }}
              >
                {optionsArray.map((option, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px 0px",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "25px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        height: "60px",
                        width: "800px",
                        paddingLeft: "30px",
                        borderRadius: "20px 20px 20px 20px",
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                        backgroundColor:
                          selectedOptions.find(
                            (item) => item.questionId === question.id
                          )?.answer === option
                            ? "orange"
                            : "#5D6DA0",
                      }}
                      onClick={() => handleOptionSelect(question.id, option)}
                    >
                      <p>{option}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div>
        <button
          style={{
            position: "fixed",
            bottom: "450px",
            right: "40px",
            backgroundColor: "whitesmoke",
            color: "orange",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={scrollPageUp}
        >
          <ArrowUpwardIcon sx={{ fontSize: 40 }} />
        </button>
        <button
          onClick={scrollPageDown}
          style={{
            position: "fixed",
            bottom: "250px",
            right: "40px",
            backgroundColor: "whitesmoke",
            color: "orange",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <ArrowDownwardIcon sx={{ fontSize: 40 }} />
        </button>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="testPage-item4">
        <div className="question-numbers">
          {quizDetail.questions?.map((question, index) => (
            <div key={index}>
              <a href={`#question-${index + 1}`}>
                <p style={{ paddingTop: "30px", color: "black" }}>
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                      cursor: "pointer",
                      backgroundColor: answeredQuestions.includes(question.id)
                        ? "orange" // Background color for answered questions
                        : "white", // Default background color
                      color: answeredQuestions.includes(question.id)
                        ? "white"
                        : "black",
                    }}
                  >
                    {index + 1}
                  </span>
                </p>
              </a>
            </div>
          ))}
        </div>

        <div>
          <button
            style={{
              backgroundColor: "#009087",
              borderRadius: "10px",
              padding: "10px 30px",
              fontWeight: "bold",
              border: "none",
              fontSize: "25px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleSubmit(); // Call the handleSubmit function
            }}
          >
            <span
              style={{
                color: "white",
              }}
            >
              Submit
            </span>
          </button>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="testPage-item5"></div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="testPage-item6">Total Point:{point}</div>
    </div>
  );
}
