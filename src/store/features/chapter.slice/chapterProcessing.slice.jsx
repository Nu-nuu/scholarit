import { createSlice } from "@reduxjs/toolkit";
import { getChapterProcessingThunk } from "../../apiThunk/chapterThunk";

export const chapterProcessingSlice = createSlice({
    name: "chapterProcessing",
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
            .addCase(getChapterProcessingThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getChapterProcessingThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getChapterProcessingThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default chapterProcessingSlice.reducer;
