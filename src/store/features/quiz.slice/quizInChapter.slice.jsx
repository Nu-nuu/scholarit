import { createSlice } from "@reduxjs/toolkit";
import { getQuizInChapterThunk } from "../../apiThunk/quizThunk";

export const quizInChapterSlice = createSlice({
    name: "quizInChapter",
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
            .addCase(getQuizInChapterThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getQuizInChapterThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getQuizInChapterThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default quizInChapterSlice.reducer;
