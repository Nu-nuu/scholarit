import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createQuiz,
    deleteQuiz,
    getQuizById,
    getQuizInChapter,
    updateQuiz,
} from "../../api/quiz";

export const getQuizInChapterThunk = createAsyncThunk(
    "quiz/getQuizInChapter",
    async (chapterId, thunkAPI) => {
        try {
            const response = await getQuizInChapter(chapterId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getQuizByIdThunk = createAsyncThunk(
    "quiz/getQuizById",
    async (id, thunkAPI) => {
        try {
            const response = await getQuizById(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateQuizThunk = createAsyncThunk(
    "quiz/updateQuiz",
    async (data, thunkAPI) => {
        try {
            const response = await updateQuiz(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteQuizThunk = createAsyncThunk(
    "quiz/deleteQuiz",
    async (id, thunkAPI) => {
        try {
            const response = await deleteQuiz(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createQuizThunk = createAsyncThunk(
    "quiz/createQuiz",
    async (data, thunkAPI) => {
        console.log('data', data);

        try {
            const response = await createQuiz(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
