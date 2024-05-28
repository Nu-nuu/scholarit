import { createSlice } from "@reduxjs/toolkit";
import { getChaptersInCourseByAdminThunk } from "../../apiThunk/chapterThunk";

export const chaptersInCourseByAdminSlice = createSlice({
    name: "chaptersInCourseByAdmin",
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
            .addCase(getChaptersInCourseByAdminThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(
                getChaptersInCourseByAdminThunk.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.loading = "succeeded";
                    state.entities = action.payload;
                }
            )
            .addCase(
                getChaptersInCourseByAdminThunk.rejected,
                (state, action) => {
                    state.loading = false;
                    state.loading = "failed";
                    state.error = action.payload;
                }
            );
    },
});

export default chaptersInCourseByAdminSlice.reducer;
