import { createSlice } from "@reduxjs/toolkit";
import { getCategoryThunk} from "../../apiThunk/categoryThunk";

export const categorySlice = createSlice({
  name: "category",
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
      .addCase(getCategoryThunk.pending, (state) => {
        state.loading = true;
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(getCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(getCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.loading = 'failed';
        state.error = action.payload;
      })
  },
});

export default categorySlice.reducer;
