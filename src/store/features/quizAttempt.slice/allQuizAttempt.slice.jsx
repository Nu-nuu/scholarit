import { createSlice } from "@reduxjs/toolkit";
import { getAllQuizAttemptThunk } from "../../apiThunk/quizAttemptThunk";

export const allQuizAttemptSlice = createSlice({
    name: "allQuizAttempt",
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
            .addCase(getAllQuizAttemptThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getAllQuizAttemptThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getAllQuizAttemptThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default allQuizAttemptSlice.reducer;
