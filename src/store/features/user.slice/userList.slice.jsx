import { createSlice } from "@reduxjs/toolkit";
import { getUserListThunk } from "../../apiThunk/userThunk";

export const userListSlice = createSlice({
    name: "userList",
    initialState: {
        entities: [],
        draft: [],
        loading: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get class
            .addCase(getUserListThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getUserListThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getUserListThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default userListSlice.reducer;
