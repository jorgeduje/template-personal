import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./thunk";

const initialState = {
  user: {}
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      
    });
  },
});

// Action creators are generated for each case reducer function
export const {  } = authSlice.actions;

export default authSlice.reducer;
