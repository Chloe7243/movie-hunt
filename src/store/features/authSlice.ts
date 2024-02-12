import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "isAuth",
  initialState: true,
  reducers: {},
});

const {} = authSlice.actions;
export default authSlice.reducer;
