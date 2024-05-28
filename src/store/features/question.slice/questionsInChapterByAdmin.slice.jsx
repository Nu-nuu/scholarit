import { createSlice } from "@reduxjs/toolkit";
import { getQuestionsInChapterByAdminThunk } from "../../apiThunk/questionThunk";

export const questionsInChapterByAdminSlice = createSlice({
    name: "questionsInChapterByAdmin",
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
            .addCase(getQuestionsInChapterByAdminThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(
                getQuestionsInChapterByAdminThunk.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.loading = "succeeded";
                    state.entities = action.payload;
                }
            )
            .addCase(
                getQuestionsInChapterByAdminThunk.rejected,
                (state, action) => {
                    state.loading = false;
                    state.loading = "failed";
                    state.error = action.payload;
                }
            );
    },
});

export default questionsInChapterByAdminSlice.reducer;
