import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createQuizAttempt,
    getQuizAttempt,
    getQuizAttemptByQuiz,
    getAllQuizAttempt
} from "../../api/quizAttempt";

export const getAllQuizAttemptThunk = createAsyncThunk(
    "quizAttempt/getAllQuizAttempt",
    async (thunkAPI) => {
        try {
            const response = await getAllQuizAttempt();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createQuizAttemptThunk = createAsyncThunk(
    "quizAttempt/createQuizAttempt",
    async (data, thunkAPI) => {
        try {
            const response = await createQuizAttempt(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getQuizAttemptByQuizThunk = createAsyncThunk(
    "quizAttempt/getQuizAttemptByQuiz",
    async (quizId, thunkAPI) => {
        try {
            const response = await getQuizAttemptByQuiz(quizId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getQuizAttemptThunk = createAsyncThunk(
    "quizAttempt/getQuizAttempt",
    async (thunkAPI) => {
        try {
            const response = await getQuizAttempt();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
