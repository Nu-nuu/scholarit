import { createSlice } from "@reduxjs/toolkit";
import { getRelatedCoursesThunk } from "../../apiThunk/courseThunk";

export const relatedCoursesSlice = createSlice({
    name: "relatedCourses",
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
            .addCase(getRelatedCoursesThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getRelatedCoursesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getRelatedCoursesThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default relatedCoursesSlice.reducer;
