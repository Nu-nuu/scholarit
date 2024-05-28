import { createSlice } from "@reduxjs/toolkit";
import { getCoursesBySearchThunk} from "../../apiThunk/courseThunk";

export const coursesBySearchSlice = createSlice({
  name: "coursesBySearch",
  initialState: {
    entities: [],
    draft: [],
    loading: 'idle',
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      // get class
      .addCase(getCoursesBySearchThunk.pending, (state) => {
        state.loading = true;
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(getCoursesBySearchThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(getCoursesBySearchThunk.rejected, (state, action) => {
        state.loading = false;
        state.loading = 'failed';
        state.error = action.payload;
      })
  },
});

export default coursesBySearchSlice.reducer;
