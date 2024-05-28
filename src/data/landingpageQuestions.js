export const quiz = {
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: "How do you describes yourself ?",
      choices: [
        "Highschool student",
        "Teacher",
        "Parent of school-age child",
        "Other",
      ],
      type: "MCQs",
      correctAnswer: "stringify()",
    },
    {
      question: "Which are you most interested in?",
      choices: [
        "Learning new skills to advance my mathematical thinking",
        "Exploring new topics i'm interested in",
        "Exercising my brain to stay sharp",
        "Other",
      ],
      type: "MCQs",
      correctAnswer: "var and let",
    },
    {
      question: "How long will you spend studying math?",
      choices: [
        "30 min / day",
        "1  hour / day ",
        "2  hour / day ",
        "+2 hour / day",
      ],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "Are you intersted in scholarship ?",
      choices: ["Yes", "No"],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
  ],
};
