import { createSlice } from "@reduxjs/toolkit";
import { getQuizAttemptThunk } from "../../apiThunk/quizAttemptThunk";

export const quizAttemptSlice = createSlice({
    name: "quizAttempt",
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
            .addCase(getQuizAttemptThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getQuizAttemptThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getQuizAttemptThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default quizAttemptSlice.reducer;
