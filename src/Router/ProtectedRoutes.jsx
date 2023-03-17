import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLogged = localStorage.getItem("token");
  const { user } = useSelector((state) => state.authSlice);

  if (!user || !isLogged) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
