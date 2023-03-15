import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counterSlice";
import authSlice from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: { counterSlice, authSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
