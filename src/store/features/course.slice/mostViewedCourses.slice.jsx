import { createSlice } from "@reduxjs/toolkit";
import { getMostViewedCourseThunk } from "../../apiThunk/courseThunk";

export const mostViewedCoursesSlice = createSlice({
    name: "mostViewedCourses",
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
            .addCase(getMostViewedCourseThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getMostViewedCourseThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getMostViewedCourseThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default mostViewedCoursesSlice.reducer;
