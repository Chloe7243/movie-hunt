import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genres",
  initialState: new Array<genreObject>(),
  reducers: {
    setGenres(state, { payload }: { payload: genreObject[] }) {
      return state = payload;
    },
  },
});

export const { setGenres } = genreSlice.actions;
export default genreSlice.reducer;
