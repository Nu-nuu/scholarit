import { createSlice } from "@reduxjs/toolkit";
import { getCourseByIdThunk} from "../../apiThunk/courseThunk";

export const courseDetailSlice = createSlice({
  name: "courseDetail",
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
      .addCase(getCourseByIdThunk.pending, (state) => {
        state.loading = true;
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(getCourseByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(getCourseByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.loading = 'failed';
        state.error = action.payload;
      })
  },
});

export default courseDetailSlice.reducer;
