import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstances";
import { onSignIn, register, sigInWithGoogle } from "../../../firebaseConfig";

export const login = createAsyncThunk("login", async (argument, thunkAPI) => {
  const res = await onSignIn(argument);

  return res.user;
});

export const loginGoogle = createAsyncThunk(
  "loginGoogle",
  async (argument, thunkAPI) => {
    const res = await sigInWithGoogle();

    return res.user;
  }
);

export const createAccount = createAsyncThunk(
  "createAccount",
  async (argument, thunkAPI) => {
    const res = await register({
      email: argument.email,
      password: argument.password,
    });

    return res.user;
  }
);
