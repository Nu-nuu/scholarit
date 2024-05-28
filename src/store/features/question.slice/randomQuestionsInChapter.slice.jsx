import { createSlice } from "@reduxjs/toolkit";
import { getRandomQuestionsInChapterThunk } from "../../apiThunk/questionThunk";

export const randomQuestionsInChapterSlice = createSlice({
    name: "randomQuestionsInChapter",
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
            .addCase(getRandomQuestionsInChapterThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(
                getRandomQuestionsInChapterThunk.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.loading = "succeeded";
                    state.entities = action.payload;
                }
            )
            .addCase(
                getRandomQuestionsInChapterThunk.rejected,
                (state, action) => {
                    state.loading = false;
                    state.loading = "failed";
                    state.error = action.payload;
                }
            );
    },
});

export default randomQuestionsInChapterSlice.reducer;
