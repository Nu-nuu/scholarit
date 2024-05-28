import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createChapter,
    deleteChapter,
    getChapterById,
    getChapterProcessing,
    getChaptersInCourseByAdmin,
    getChaptersInCourseByUser,
    updateChapter,
} from "../../api/chapter";

export const updateChapterThunk = createAsyncThunk(
    "chapter/updateChapter",
    async (data, thunkAPI) => {
        try {
            const response = await updateChapter(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteChapterThunk = createAsyncThunk(
    "chapter/deleteChapter",
    async (id, thunkAPI) => {
        try {
            const response = await deleteChapter(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createChapterThunk = createAsyncThunk(
    "chapter/createChapter",
    async (data, thunkAPI) => {
        try {
            const response = await createChapter(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getChapterByIdThunk = createAsyncThunk(
    "chapter/getChapterById",
    async (id, thunkAPI) => {
        try {
            const response = await getChapterById(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getChapterProcessingThunk = createAsyncThunk(
    "chapter/getChapterProcessing",
    async (thunkAPI) => {
        try {
            const response = await getChapterProcessing();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getChaptersInCourseByAdminThunk = createAsyncThunk(
    "chapter/getChaptersInCourseByAdmin",
    async (courseId, thunkAPI) => {
        try {
            const response = await getChaptersInCourseByAdmin(courseId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getChaptersInCourseByUserThunk = createAsyncThunk(
    "chapter/getChaptersInCourseByUser",
    async (courseId, thunkAPI) => {
        try {
            const response = await getChaptersInCourseByUser(courseId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
