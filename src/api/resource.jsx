import api from "./api";

export const getResourceInChapter = async (chapterId) => {
    const response = await api.get(`/api/user/chapter/${chapterId}/resource`);
    return response.data;
};

export const getResourceById = async (id) => {
    const response = await api.get(`/api/user/resource/${id}`);
    return response.data;
};

export const createResource = async (data) => {
    const response = await api.post(`/api/admin/resource`, data);
    return response.data;
};

export const updateResource = async (data) => {
    const response = await api.put(`/api/admin/resource`, data);
    return response.data;
};

export const deleteResource = async (id) => {
    const response = await api.delete(`/api/admin/resource/${id}`);
    return response.data;
};