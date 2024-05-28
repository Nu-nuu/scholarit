import { createSlice } from "@reduxjs/toolkit";
import { getFinishedCourseThunk } from "../../apiThunk/courseThunk";

export const finishedCoursesSlice = createSlice({
    name: "finishedCourses",
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
            .addCase(getFinishedCourseThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getFinishedCourseThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getFinishedCourseThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default finishedCoursesSlice.reducer;
