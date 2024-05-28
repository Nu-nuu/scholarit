import { createSlice } from "@reduxjs/toolkit";
import { getResourceByIdThunk } from "../../apiThunk/resourceThunk";

export const resourceDetailSlice = createSlice({
    name: "resourceDetail",
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
            .addCase(getResourceByIdThunk.pending, (state) => {
                state.loading = true;
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getResourceByIdThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = "succeeded";
                state.entities = action.payload;
            })
            .addCase(getResourceByIdThunk.rejected, (state, action) => {
                state.loading = false;
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default resourceDetailSlice.reducer;
