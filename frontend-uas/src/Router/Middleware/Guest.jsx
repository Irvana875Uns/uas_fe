import React from "react";
const { Navigate, Outlet } = require("react-router-dom");

export default function Guest() {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
}