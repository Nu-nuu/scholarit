import React, { useEffect } from "react";
import { useState } from "react";
import Question from "../littleQuiz/Question";

import {questions} from "../littleQuiz/dataQuestions";

const QuestionsPage = ({
  setShowPages,
  score,
  setScore,
  setShowQuestionsPage,
  setShowFinalPage,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <>
      <Question
        questionIndex={questionIndex}
        questions={questions}
        setQuestionIndex={setQuestionIndex}
        setShowQuestionsPage={setShowQuestionsPage}
        setShowFinalPage={setShowFinalPage}
        score={score}
        setScore={setScore}
      />
    </>
  );
};

export default QuestionsPage;