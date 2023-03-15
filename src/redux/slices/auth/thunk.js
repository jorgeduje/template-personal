import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstances";
import { onSignIn, register, sigInWithGoogle } from "../../../firebaseConfig";

export const login = createAsyncThunk(
  "login",
  async (argument, { rejectWithValue }) => {
    const res = await onSignIn(argument);
    if (res.user.accessToken) {
      return res.user;
    } else {
      return rejectWithValue("Error de autenticacion");
    }
  }
);

export const loginGoogle = createAsyncThunk(
  "loginGoogle",
  async (argument, { rejectWithValue }) => {
    const res = await sigInWithGoogle();
    if (res.user.accessToken) {
      return res.user;
    } else {
      return rejectWithValue("Error de autenticacion");
    }
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
