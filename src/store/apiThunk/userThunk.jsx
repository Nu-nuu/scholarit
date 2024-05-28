import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    changePassword,
    checkOTP,
    getUserInfo,
    getUserList,
    login,
    sendOTP,
    signup,
    updateUser,
    getUserInfoByAdmin
} from "../../api/users";

export const updateUserThunk = createAsyncThunk(
    "users/updateUser",
    async (data, thunkAPI) => {
        try {
            const response = await updateUser(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const sendOTPThunk = createAsyncThunk(
    "users/sendOTP",
    async (email, thunkAPI) => {
        try {
            const response = await sendOTP(email);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getUserListThunk = createAsyncThunk(
    "users/getUserList",
    async ({ pageNo, pageSize }, thunkAPI) => {
        try {
            const response = await getUserList(pageNo, pageSize);
            return response;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getUserInfoByAdminThunk = createAsyncThunk(
    "users/getUserInfoByAdmin",
    async (id, thunkAPI) => {
        try {
            const response = await getUserInfoByAdmin(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getUserInfoThunk = createAsyncThunk(
    "users/getUserInfo",
    async (thunkAPI) => {
        try {
            const response = await getUserInfo();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const checkOTPThunk = createAsyncThunk(
    "users/checkOTP",
    async (data, thunkAPI) => {
        try {
            const response = await checkOTP(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const changePasswordThunk = createAsyncThunk(
    "users/changePassword",
    async (data, thunkAPI) => {
        try {
            const response = await changePassword(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const signupThunk = createAsyncThunk(
    "users/signup",
    async (data, thunkAPI) => {
        try {
            const response = await signup(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const loginThunk = createAsyncThunk(
    "users/login",
    async (data, thunkAPI) => {
        try {
            const response = await login(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
