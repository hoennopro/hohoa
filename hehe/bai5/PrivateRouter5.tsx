import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter: React.FC = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
