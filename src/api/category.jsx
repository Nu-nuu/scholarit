import api from "./api";

export const getCategory = async () => {
    const response = await api.get("/api/user/category");
    return response.data;
};

export const getCategoryById = async (id) => {
    const response = await api.get(`/api/user/category/${id}`);
    return response.data;
};

export const createCategory = async (data) => {
    const response = await api.post(`/api/admin/category`, data);
    return response.data;
};

export const updateCategory = async (data) => {
    const response = await api.put(`/api/admin/category`, data);
    return response.data;
};

export const deleteCategory = async (id) => {
    const response = await api.delete(`/api/admin/category/${id}`);
    return response.data;
};