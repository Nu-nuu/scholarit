import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createOrder,
    getOrderByAdmin,
    getOrderById,
    getOrderByIdUser,
    getOrderByUser,
    updateOrder,
} from "../../api/order";

export const updateOrderThunk = createAsyncThunk(
    "order/updateOrder",
    async (data, thunkAPI) => {
        try {
            const response = await updateOrder(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getOrderByUserThunk = createAsyncThunk(
    "order/getOrderByUser",
    async (thunkAPI) => {
        try {
            const response = await getOrderByUser();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getOrderByIdThunk = createAsyncThunk(
    "order/getOrderById",
    async (orderId, thunkAPI) => {
        try {
            const response = await getOrderById(orderId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getOrderByIdUserThunk = createAsyncThunk(
    "order/getOrderById",
    async (orderId, thunkAPI) => {
        try {
            const response = await getOrderByIdUser(orderId);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getOrderByAdminThunk = createAsyncThunk(
    "order/getOrderByAdmin",
    async ({pageNo, pageSize},thunkAPI) => {
        try {
            const response = await getOrderByAdmin(pageNo, pageSize);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createOrderThunk = createAsyncThunk(
    "order/createOrder",
    async (data, thunkAPI) => {
        try {
            const response = await createOrder(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
