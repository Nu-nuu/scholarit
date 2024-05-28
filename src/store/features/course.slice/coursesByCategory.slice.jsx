import { createSlice } from "@reduxjs/toolkit";
import { getCoursesByCategoryThunk } from "../../apiThunk/courseThunk";

export const coursesByCategorySlice = createSlice({
    name: "coursesByCategory",
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
            .addCase(getCoursesByCategoryThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getCoursesByCategoryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getCoursesByCategoryThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default coursesByCategorySlice.reducer;
