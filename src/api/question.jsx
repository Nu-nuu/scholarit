import api from "./api";

export const getQuestionsInChapter = async (chapterId) => {
    const response = await api.get(`/api/user/chapter/${chapterId}/question`);
    return response.data;
};

export const getRandomQuestionsInChapter = async (chapterId) => {
    const response = await api.get(`/api/user/chapter/${chapterId}/question/random`);
    return response.data;
};

export const getCheckingRandomQuestionsInChapter = async (chapterId) => {
    const response = await api.get(`/api/user/chapter/${chapterId}/question/random/checking`);
    return response.data;
};

export const getQuestionsInChapterByAdmin = async (chapterId) => {
    const response = await api.get(`/api/admin/chapter/${chapterId}/question?pageNo=1&pageSize=100`);
    return response.data;
};

export const getQuestionsById = async (id) => {
    const response = await api.get(`/api/user/question/${id}`);
    return response.data;
};

export const createQuestion = async (data) => {
    const response = await api.post(`/api/admin/question`, data);
    return response.data;
};

export const updateQuestion = async (data) => {
    const response = await api.put(`/api/admin/question`, data);
    return response.data;
};

export const deleteQuestion = async (id) => {
    const response = await api.delete(`/api/admin/question/${id}`);
    return response.data;
};