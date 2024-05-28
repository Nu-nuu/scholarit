import { createSlice } from "@reduxjs/toolkit";
import { getResourceInChapterThunk } from "../../apiThunk/resourceThunk";

export const resourceInChapterSlice = createSlice({
    name: "resourceInChapter",
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
            .addCase(getResourceInChapterThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getResourceInChapterThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getResourceInChapterThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default resourceInChapterSlice.reducer;
