import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createCourse,
    deleteCourse,
    getCourseById,
    getCourses,
    getCoursesByCategory,
    getCoursesBySearch,
    getFinishedCourse,
    updateCourse,
    getRelatedCourses,
    getEnrollCourse,
    getMostViewedCourse
} from "../../api/course";

export const getMostViewedCourseThunk = createAsyncThunk(
    "course/getMostViewedCourse",
    async (thunkAPI) => {
        try {
            const response = await getMostViewedCourse();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getEnrollCoursesThunk = createAsyncThunk(
    "course/getEnrollCourses",
    async (thunkAPI) => {
        try {
            const response = await getEnrollCourse();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getRelatedCoursesThunk = createAsyncThunk(
    "course/getRelatedCourses",
    async (thunkAPI) => {
        try {
            const response = await getRelatedCourses();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateCourseThunk = createAsyncThunk(
    "course/updateCourse",
    async (data, thunkAPI) => {
        try {
            const response = await updateCourse(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getFinishedCourseThunk = createAsyncThunk(
    "course/getFinishedCourse",
    async (thunkAPI) => {
        try {
            const response = await getFinishedCourse();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getCoursesBySearchThunk = createAsyncThunk(
    "course/getCoursesBySearch",
    async (searchString, thunkAPI) => {
        try {
            const response = await getCoursesBySearch(searchString);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getCoursesByCategoryThunk = createAsyncThunk(
    "course/getCoursesByCategory",
    async (categoryId, thunkAPI) => {
        try {
            const response = await getCoursesByCategory(categoryId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getCoursesThunk = createAsyncThunk(
    "course/getCourses",
    async ({pageNo, pageSize}, thunkAPI) => {
        try {
            const response = await getCourses(pageNo, pageSize);
            return response;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getCourseByIdThunk = createAsyncThunk(
    "course/getCourseById",
    async (id, thunkAPI) => {
        try {
            const response = await getCourseById(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteCourseThunk = createAsyncThunk(
    "course/deleteCourse",
    async (id, thunkAPI) => {
        try {
            const response = await deleteCourse(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);




export const createCourseThunk = createAsyncThunk(
    "course/createCourse",
    async (data, thunkAPI) => {
        try {
            const response = await createCourse(data);
            return response;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
