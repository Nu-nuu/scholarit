import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createQuestion,
    deleteQuestion,
    getCheckingRandomQuestionsInChapter,
    getQuestionsById,
    getQuestionsInChapter,
    getQuestionsInChapterByAdmin,
    getRandomQuestionsInChapter,
    updateQuestion,
} from "../../api/question";

export const updateQuestionThunk = createAsyncThunk(
    "question/updateQuestion",
    async (data, thunkAPI) => {
        try {
            const response = await updateQuestion(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getRandomQuestionsInChapterThunk = createAsyncThunk(
    "question/getRandomQuestionsInChapter",
    async (chapterId, thunkAPI) => {
        try {
            const response = await getRandomQuestionsInChapter(chapterId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getQuestionsInChapterByAdminThunk = createAsyncThunk(
    "question/getQuestionsInChapterByAdmin",
    async (chapterId, thunkAPI) => {
        try {
            const response = await getQuestionsInChapterByAdmin(chapterId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getQuestionsInChapterThunk = createAsyncThunk(
    "question/getQuestionsInChapter",
    async (chapterId, thunkAPI) => {
        try {
            const response = await getQuestionsInChapter(chapterId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getQuestionsByIdThunk = createAsyncThunk(
    "question/getQuestionsById",
    async (id, thunkAPI) => {
        try {
            const response = await getQuestionsById(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getCheckingRandomQuestionsInChapterThunk = createAsyncThunk(
    "question/getCheckingRandomQuestionsInChapter",
    async (chapterId, thunkAPI) => {
        try {
            const response = await getCheckingRandomQuestionsInChapter(
                chapterId
            );
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteQuestionThunk = createAsyncThunk(
    "question/deleteQuestion",
    async (id, thunkAPI) => {
        try {
            const response = await deleteQuestion(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createQuestionThunk = createAsyncThunk(
    "question/createQuestion",
    async (data, thunkAPI) => {
        console.log('data', data);
        try {
            const response = await createQuestion(data);
            return response;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
