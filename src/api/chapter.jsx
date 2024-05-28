import api from "./api";

export const getChaptersInCourseByUser = async (courseId) => {
    const response = await api.get(`/api/user/course/${courseId}/chapter`);
    return response.data;
};

export const getChapterProcessing = async () => {
    const response = await api.get("/api/user/chapter/currentChapter/processing");
    return response.data;
};

export const getChaptersInCourseByAdmin = async (courseId) => {
    const response = await api.get(`/api/admin/course/${courseId}/chapter`);
    return response.data;
};

export const getChapterById = async (id) => {
    const response = await api.get(`/api/user/chapter/${id}`);
    return response.data;
};

export const createChapter = async (data) => {
    const response = await api.post(`/api/admin/chapter`, data);
    return response.data;
};

export const updateChapter = async (data) => {
    const response = await api.put(`/api/admin/chapter`, data);
    return response.data;
};

export const deleteChapter = async (id) => {
    const response = await api.delete(`/api/admin/chapter/${id}`);
    return response.data;
};