import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login/Login";
import SignUpContainer from "../components/pages/SignUp/SignUp.container";
import { MenutItems } from "./MenuItems";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route>
          {MenutItems.map(({ id, path, Element }) => (
            <Route path={path} key={id} element={<Element />} />
          ))}
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpContainer />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
