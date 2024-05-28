import api from "./api";

export const getCourses = async (pageNo, pageSize) => {
    const response = await api.get(`/api/user/course?pageNo=${pageNo}&pageSize=${pageSize}`);
    return response.data;
};

export const getCoursesByCategory = async (categoryId) => {
    const response = await api.get(`/api/user/category/${categoryId}/course`);
    return response.data;
};

export const getMostViewedCourse = async () => {
    const response = await api.get(`/api/user/courseWithMostView?pageNo=1&pageSize=10`);
    return response.data;
};

export const getEnrollCourse = async () => {
    const response = await api.get(`/api/user/enrollCourse?pageNo=1&pageSize=100`);
    return response.data;
};

export const getFinishedCourse = async () => {
    const response = await api.get(`/api/user/course/finished?pageNo=1&pageSize=100`);
    return response.data;
};

export const getCoursesBySearch = async (searchString) => {
    const response = await api.get(`/api/user/course/searching/${searchString}?pageNo=1&pageSize=100`);
    return response.data;
};

export const getRelatedCourses = async () => {
    const response = await api.get(`/api/user/relatedCourse?pageNo=1&pageSize=10`);
    return response.data;
};

export const getCourseById = async (id) => {
    const response = await api.get(`/api/user/course/${id}`);
    return response.data;
};

export const createCourse = async (data) => {
    const response = await api.post(`/api/admin/course`, data);
    return response.data;
};

export const updateCourse = async (data) => {
    const response = await api.put(`/api/admin/course`, data);
    return response.data;
};

export const deleteCourse = async (id) => {
    const response = await api.delete(`/api/admin/course/${id}`);
    return response.data;
};