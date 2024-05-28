import api from "./api";

export const getUserInfo = async () => {
    const response = await api.get("/api/user/info");
    return response.data;
};

export const getUserInfoByAdmin = async (userId) => {
    const response = await api.get(`/api/admin/user/${userId}/info`);
    return response.data;
};

export const getUserList = async (pageNo, pageSize) => {
    const response = await api.get(`/api/admin/user?pageNo=${pageNo}&pageSize=${pageSize}`);
    return response.data;
};

export const signup = async (data) => {
    const response = await api.post(`/api/user`, data);
    return response.data;
};

export const login = async (data) => {
    const response = await api.post(`/login`, data);
    return response.data;
};

export const updateUser = async (data) => {
    const response = await api.put(`/api/user`, data);
    return response.data;
};

export const sendOTP = async (email) => {
    const response = await api.post(`/api/user/sendingOTP?email=${email}`);
    return response.data;
};

export const checkOTP = async (data) => {
    const response = await api.post(`/api/user/checkingOTP`, data);
    return response.data;
};

export const changePassword = async (data) => {
    const response = await api.put(`/api/user/changePassword`, data);
    return response.data;
};
