import { createSlice } from "@reduxjs/toolkit";
import { getOrderByUserThunk } from "../../apiThunk/orderThunk";

export const orderByUserSlice = createSlice({
    name: "orderByUser",
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
            .addCase(getOrderByUserThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getOrderByUserThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getOrderByUserThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default orderByUserSlice.reducer;
