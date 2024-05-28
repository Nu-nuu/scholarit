import api from "./api";

export const getOrderByUser = async () => {
    const response = await api.get("/api/user/order");
    return response.data;
};

export const getOrderByAdmin = async (pageNo, pageSize) => {
    const response = await api.get(`/api/admin/order?pageNo=${pageNo}&pageSize=${pageSize}`);
    return response.data;
};

export const getOrderById = async (orderId) => {
    const response = await api.get(`/api/admin/order/${orderId}`);
    return response.data;
};

export const getOrderByIdUser = async (orderId) => {
    const response = await api.get(`/api/user/order/${orderId}`);
    return response.data;
};

export const createOrder = async (data) => {
    const response = await api.post(`/api/user/order`, data);
    return response.data;
};

export const updateOrder = async (data) => {
    const response = await api.put(`/api/admin/order`, data);
    return response.data;
};