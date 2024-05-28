import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../../api/category";

export const getCategoryThunk = createAsyncThunk(
    "category/getCategory",
    async (thunkAPI) => {
        try {
            const response = await getCategory();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getCategoryByIdThunk = createAsyncThunk(
    "category/getCategoryById",
    async (id, thunkAPI) => {
        try {
            const response = await getCategoryById(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteCategoryThunk = createAsyncThunk(
    "category/deleteCategory",
    async (id, thunkAPI) => {
        try {
            const response = await deleteCategory(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateCategoryThunk = createAsyncThunk(
    "category/updateCategory",
    async (data, thunkAPI) => {
        try {
            const response = await updateCategory(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createCategoryThunk = createAsyncThunk(
    "category/createCategory",
    async (data, thunkAPI) => {
        try {
            const response = await createCategory(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
