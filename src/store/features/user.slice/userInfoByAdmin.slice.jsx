import { createSlice } from "@reduxjs/toolkit";
import { getUserInfoByAdminThunk } from "../../apiThunk/userThunk";

export const userInfoByAdminSlice = createSlice({
    name: "userInfoByAdmin",
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
            .addCase(getUserInfoByAdminThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getUserInfoByAdminThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getUserInfoByAdminThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default userInfoByAdminSlice.reducer;
