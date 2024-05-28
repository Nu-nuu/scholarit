import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createResource,
    deleteResource,
    getResourceById,
    getResourceInChapter,
    updateResource,
} from "../../api/resource";

export const updateResourceThunk = createAsyncThunk(
    "resource/updateResource",
    async (data, thunkAPI) => {
        try {
            const response = await updateResource(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getResourceInChapterThunk = createAsyncThunk(
    "resource/getResourceInChapter",
    async (chapterId, thunkAPI) => {
        try {
            const response = await getResourceInChapter(chapterId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getResourceByIdThunk = createAsyncThunk(
    "resource/getResourceById",
    async (id, thunkAPI) => {
        try {
            const response = await getResourceById(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteResourceThunk = createAsyncThunk(
    "resource/deleteResource",
    async (id, thunkAPI) => {
        try {
            const response = await deleteResource(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createResourceThunk = createAsyncThunk(
    "resource/createResource",
    async (data, thunkAPI) => {
        try {
            const response = await createResource(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
