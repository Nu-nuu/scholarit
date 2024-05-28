import { createSlice } from "@reduxjs/toolkit";
import { getQuestionsInChapterThunk } from "../../apiThunk/questionThunk";

export const questionsInChapterSlice = createSlice({
    name: "questionsInChapter",
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
            .addCase(getQuestionsInChapterThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(
                getQuestionsInChapterThunk.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.loading = "succeeded";
                    state.entities = action.payload;
                }
            )
            .addCase(
                getQuestionsInChapterThunk.rejected,
                (state, action) => {
                    state.loading = false;
                    state.loading = "failed";
                    state.error = action.payload;
                }
            );
    },
});

export default questionsInChapterSlice.reducer;
