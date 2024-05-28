import api from "./api";

export const getQuizAttempt = async () => {
    const response = await api.get("/api/user/quizAttempt");
    return response.data;
};

export const getQuizAttemptByQuiz = async (quizId) => {
    const response = await api.get(`/api/user/quiz/${quizId}/quizAttempt`);
    return response.data;
};

export const getAllQuizAttempt = async () => {
    const response = await api.get(`/api/user/allQuizAttempt?pageNo=1&pageSize=100`);
    return response.data;
};

export const createQuizAttempt = async (data) => {
    const response = await api.post(`/api/quizAttempt`, data);
    return response.data;
};