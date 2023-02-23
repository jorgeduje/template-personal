import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice/counterSlice";

export const store = configureStore({
  reducer: { counterSlice },
});
