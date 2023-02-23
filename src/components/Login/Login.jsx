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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
            <Typography variant="h3" color={"primary"} align="center">Welcome to the store</Typography>
        </Box>
      <form action="">
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
                fullWidth
                autoComplete="none"
                autoFocus={false}
              />
            </Grid>
            <Grid item xs={10}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
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
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <Button variant="contained" fullWidth>Ingresar</Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
