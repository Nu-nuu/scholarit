import { createSlice } from "@reduxjs/toolkit";
import { getEnrollCoursesThunk } from "../../apiThunk/courseThunk";

export const enrollCoursesSlice = createSlice({
    name: "enrollCourses",
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
            .addCase(getEnrollCoursesThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getEnrollCoursesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getEnrollCoursesThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default enrollCoursesSlice.reducer;
