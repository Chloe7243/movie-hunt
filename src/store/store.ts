import { api } from "./api/api";
import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./features/genreSlice";
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    genres: genreReducer,
    isAuth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
