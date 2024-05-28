import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { quizDetailSelector } from "../../../store/sellectors";
import { getQuizByIdThunk } from "../../../store/apiThunk/quizThunk";

function CountdownTimer({ onTimerEnd }) {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const quizDetail = useSelector(quizDetailSelector);
  useEffect(() => {
    dispatch(getQuizByIdThunk(id));
  }, []);

  const initialMinutes = quizDetail.duration || 30;

  const storedMinutes =
    parseInt(localStorage.getItem("countdownMinutes")) || initialMinutes; // Change 2 to the desired initial minutes
  const storedSeconds = parseInt(localStorage.getItem("countdownSeconds")) || 0;

  const [minutes, setMinutes] = useState(storedMinutes);
  const [seconds, setSeconds] = useState(storedSeconds);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(countdown);
        // Automatically submit the quiz when the timer reaches 0
        onTimerEnd();
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [minutes, seconds, onTimerEnd]);

  useEffect(() => {
    localStorage.setItem("countdownMinutes", minutes);
    localStorage.setItem("countdownSeconds", seconds);
    // To remove countdown timer data from localStorage
      // localStorage.removeItem("countdownMinutes");
      // localStorage.removeItem("countdownSeconds");
  }, [minutes, seconds]);

  return (
    <div>
      <h2 style={{ fontSize: "40px" }}>
        {minutes < 10 ? "0" : ""}
        {minutes} : {seconds < 10 ? "0" : ""}
        {seconds}
      </h2>
    </div>
  );
}

export default CountdownTimer;
