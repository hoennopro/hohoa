import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRouter: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Outlet />{" "}
    </div>
  );
};

export default PrivateRouter;
