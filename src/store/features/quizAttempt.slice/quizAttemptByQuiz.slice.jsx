import { createSlice } from "@reduxjs/toolkit";
import { getQuizAttemptByQuizThunk } from "../../apiThunk/quizAttemptThunk";

export const quizAttemptByQuizSlice = createSlice({
    name: "quizAttemptByQuiz",
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
            .addCase(getQuizAttemptByQuizThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getQuizAttemptByQuizThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getQuizAttemptByQuizThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default quizAttemptByQuizSlice.reducer;
