import { createSlice } from "@reduxjs/toolkit";
import { createAccount, login, loginGoogle } from "./thunk";

const initialState = {
  user: {},
  accessToken: localStorage.getItem("token"),
  isLoading: false,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state, action) => {
      console.log(state);
      state.user = {};
      state.accessToken = null;
      state.isLoading = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Login with email and password
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.user = { email: action.payload.email };
      localStorage.setItem("token", action.payload.accessToken);
      state.errorMessage = null;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = null;

      console.log("cargando: ", action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = "Error de autenticacion";
      console.log("error de login: ", action.payload);
    });

    // login with google
    builder.addCase(loginGoogle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.user = { email: action.payload.email };
      localStorage.setItem("token", action.payload.accessToken);
      state.errorMessage = null;
    });
    builder.addCase(loginGoogle.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = null;
      console.log("cargando: ", action.payload);
    });
    builder.addCase(loginGoogle.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = "Error de autenticacion";
      console.log("error de login: ", action.payload);
    });
    // Create account
    builder.addCase(createAccount.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.user = { email: action.payload.email };
      localStorage.setItem("token", action.payload.accessToken);
    });
    builder.addCase(createAccount.pending, (state, action) => {
      console.log("pendiente : ", action.payload);
    });
    builder.addCase(createAccount.rejected, (state, action) => {
      console.log("error al crear cuenta : ", action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
