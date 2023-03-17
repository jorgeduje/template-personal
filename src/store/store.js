import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: { authSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});