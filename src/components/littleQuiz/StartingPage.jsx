import React, { useState } from "react";
import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
}) => {
  const startGame = () => {
    setShowStartingPage(false);
    setShowQuestionsPage(true);
  };

  return (
    <Card>
      <button className="start_btn" onClick={startGame}>
        Let's play
      </button>

      <p className="top_score">
        Top score: <span>{topScore}</span>
      </p>
    </Card>
  );
};

export default StartingPage;
