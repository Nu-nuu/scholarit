import { createSlice } from "@reduxjs/toolkit";
import { getCheckingRandomQuestionsInChapterThunk } from "../../apiThunk/questionThunk";

export const checkingRandomQuestionsInChapterSlice = createSlice({
    name: "checkingRandomQuestionsInChapter",
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
            .addCase(
                getCheckingRandomQuestionsInChapterThunk.pending,
                (state) => {
                    state.loading = true;
                    state.loading = "loading";
                    state.error = null;
                }
            )
            .addCase(
                getCheckingRandomQuestionsInChapterThunk.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.loading = "succeeded";
                    state.entities = action.payload;
                }
            )
            .addCase(
                getCheckingRandomQuestionsInChapterThunk.rejected,
                (state, action) => {
                    state.loading = false;
                    state.loading = "failed";
                    state.error = action.payload;
                }
            );
    },
});

export default checkingRandomQuestionsInChapterSlice.reducer;
