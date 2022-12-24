import React from "react";
const { Navigate, Outlet } = require("react-router-dom");

export default function Auth() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}