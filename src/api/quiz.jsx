import api from "./api";

export const getQuizById = async (id) => {
    const response = await api.get(`/api/user/quiz/${id}`);
    return response.data;
};

export const getQuizInChapter = async (chapterId) => {
    const response = await api.get(`/api/user/chapter/${chapterId}/quiz?pageNo=1&pageSize=100`);
    return response.data;
};

export const createQuiz = async (data) => {
    const response = await api.post(`/api/admin/quiz`, data);
    return response.data;
};

export const updateQuiz = async (data) => {
    const response = await api.put(`/api/admin/quiz`, data);
    return response.data;
};

export const deleteQuiz = async (id) => {
    const response = await api.delete(`/api/admin/quiz/${id}`);
    return response.data;
};