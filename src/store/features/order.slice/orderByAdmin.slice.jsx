import { createSlice } from "@reduxjs/toolkit";
import { getOrderByAdminThunk } from "../../apiThunk/orderThunk";

export const orderByAdminSlice = createSlice({
    name: "orderByAdmin",
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
            .addCase(getOrderByAdminThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getOrderByAdminThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getOrderByAdminThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default orderByAdminSlice.reducer;
