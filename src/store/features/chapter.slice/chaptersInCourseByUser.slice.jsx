import { createSlice } from "@reduxjs/toolkit";
import { getChaptersInCourseByUserThunk } from "../../apiThunk/chapterThunk";

export const chaptersInCourseByUserSlice = createSlice({
    name: "chaptersInCourseByUser",
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
            .addCase(getChaptersInCourseByUserThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(
                getChaptersInCourseByUserThunk.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.loading = "succeeded";
                    state.entities = action.payload;
                }
            )
            .addCase(
                getChaptersInCourseByUserThunk.rejected,
                (state, action) => {
                    state.loading = false;
                    state.loading = "failed";
                    state.error = action.payload;
                }
            );
    },
});

export default chaptersInCourseByUserSlice.reducer;
