import React, { useState, useEffect } from "react";

function Timer({ initialTime, timerActive }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    if (!timerActive) {
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(timerInterval);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerActive]);

  if (!timerActive) {
    return null; // Don't render the timer if it's not active
  }

  return (
    <h2 style={{ width: "240px" }}>
      Time Left: {String(minutes).padStart(2, "0")} :{" "}
      {String(seconds).padStart(2, "0")} s
    </h2>
  );
}

export default Timer;
