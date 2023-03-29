import { createSlice } from "@reduxjs/toolkit";
import { createAccount, login, loginGoogle } from "./thunk";

const initialState = {
  user: localStorage.getItem("user"),
  accessToken: localStorage.getItem("token"),
  isLoading: false,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.accessToken = null;
      state.isLoading = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    // Login with email and password
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.user = { email: action.payload.email };
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("user", action.payload.email);
      state.errorMessage = null;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = "El usuario o contraseña no existe";
    });

    // login with google
    builder.addCase(loginGoogle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.user = { email: action.payload.email };
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("user", action.payload.email);

      state.errorMessage = null;
    });
    builder.addCase(loginGoogle.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(loginGoogle.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = "El usuario o contraseña no existe";
    });
    // Create account
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.user = { email: action.payload.email };
      localStorage.setItem("token", action.payload.accessToken);
    });
    builder.addCase(createAccount.pending, (state, action) => {});
    builder.addCase(createAccount.rejected, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
