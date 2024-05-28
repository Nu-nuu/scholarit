import { createSlice } from "@reduxjs/toolkit";
import { getCategoryByIdThunk } from "../../apiThunk/categoryThunk";

export const categoryDetailSlice = createSlice({
    name: "categoryDetail",
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
            .addCase(getCategoryByIdThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getCategoryByIdThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getCategoryByIdThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default categoryDetailSlice.reducer;
