import { createSlice } from "@reduxjs/toolkit";
import { getOrderByIdThunk } from "../../apiThunk/orderThunk";

export const orderDetailSlice = createSlice({
    name: "orderDetail",
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
            .addCase(getOrderByIdThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getOrderByIdThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getOrderByIdThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default orderDetailSlice.reducer;
