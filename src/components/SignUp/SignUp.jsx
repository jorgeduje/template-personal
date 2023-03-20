import React, { useEffect, useState } from "react";
import { theme } from "../../ThemeConfig";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../store/auth/thunk";
import { useNavigate } from "react-router-dom";
import {  styled } from '@mui/material/styles';
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#513a45',
    width: "100px"
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#cc9b9a',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#cc9b9a',
    },
    '&:hover fieldset': {
      borderColor: '#513a45',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#cc9b9a',
    },
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  }
});
const CssTextField2 = styled(FormControl)({
  '& label.Mui-focused': {
    color: '#513a45',
    width: "100px"
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#cc9b9a',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#cc9b9a',
    },
    '&:hover fieldset': {
      borderColor: '#513a45',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#cc9b9a',
    },
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  }
});


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { accessToken } = useSelector((state) => state.authSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = (data) => {
    dispatch(createAccount(data));
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken]);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      repetPassword: "",
    },
    onSubmit: register,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Ingrese un email"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "es muy corta"),
      repetPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box padding={3}>
        <Typography variant="h3" color={"secondary.primary"} align="center">
          Crear cuenta
        </Typography>
      </Box>
      <form action="" onSubmit={handleSubmit}>
        <Box>
          <Grid
            container
            rowSpacing={2}
            alignItems="center"
            justifyContent={"center"}
          >
            <Grid item xs={10} md={7}>
              <CssTextField
                color="primary"
                label="Email"
                variant="outlined"
                fullWidth
                autoComplete="none"
                autoFocus={false}
                value={values.email}
                name="email"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={10} md={7}>
              <CssTextField2 variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Contraseña
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        color={"primary"}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  fullWidth
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  error={errors.password ? true : false}
                  // helperText={errors.password}
                />
                {errors.password ? (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#d32f2f",
                      marginLeft: "14px",
                    }}
                  >
                    {errors.password}
                  </span>
                ) : null}
              </CssTextField2>
            </Grid>
            <Grid item xs={10} md={7}>
              <CssTextField2 variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirmar
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        color={"primary"}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  fullWidth
                  value={values.repetPassword}
                  name="repetPassword"
                  onChange={handleChange}
                  error={errors.repetPassword ? true : false}
                />
                {errors.repetPassword ? (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#d32f2f",
                      marginLeft: "14px",
                    }}
                  >
                    {errors.repetPassword}
                  </span>
                ) : null}
              </CssTextField2>
            </Grid>
            <Grid container justifyContent="center" spacing={2} mt={2}>
              <Grid item xs={8} md={3}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    color: "white",
                    textTransform: "none",
                    textShadow: "2px 2px 2px grey",
                  }}
                >
                  Crear cuenta
                </Button>
              </Grid>
              <Grid item xs={8} md={3}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate("/login")}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    textShadow: "2px 2px 2px grey",
                  }}
                >
                  Regresar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
