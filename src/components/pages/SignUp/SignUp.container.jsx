import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../../store/auth/thunk";
import SignUp from "./SignUp";

const SignUpContainer = () => {
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
    <SignUp
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      values={values}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      navigate={navigate}
    />
  );
};

export default SignUpContainer;
