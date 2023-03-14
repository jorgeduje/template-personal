import React, { useState } from "react";
import { theme } from "../../ThemeConfig";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
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
import { Tooltip } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { onSignIn, sigInWithGoogle } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const handleLoginGoggle = async () => {
    const res = await sigInWithGoogle();
    localStorage.setItem("token", res.user.accessToken);
    navigate("/");
  };
  const ingresar = async (data) => {
    const res = await onSignIn(data);
    localStorage.setItem("token", res.user.accessToken);
    navigate("/");
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ingresar,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Ingrese un email"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "es muy corta"),
    }),
    validateOnChange: false,
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: `calc(100vh - 74px)`, sm: `calc(100vh - 80px)` }, // SOLUCIONAR { sm: `calc(100vh - 6px)` }
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box padding={3}>
        <Typography variant="h3" color={"primary"} align="center">
          Welcome to the store
        </Typography>
      </Box>
      <form action="" onSubmit={handleSubmit}>
        <Box>
          <Grid
            container
            spacing={2}
            // alignItems="center"
            justifyContent={"center"}
          >
            <Grid item xs={10}>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
                fullWidth
                autoComplete="none"
                autoFocus={false}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={10}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  autoComplete="current-password"
                  // helperText={errors.password}
                  name="password"
                  onChange={handleChange}
                  error={errors.password ? true : false}
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
                />

                {!!errors.password && (
                  <FormHelperText error>{errors.password}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <Button variant="contained" fullWidth type="submit">
                Ingresar
              </Button>
              <Tooltip title="ingresa con google">
                <IconButton onClick={handleLoginGoggle}>
                  <FcGoogle size={50} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
