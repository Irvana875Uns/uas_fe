import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Auth from "./Middleware/Auth";
import Guest from "./Middleware/Guest";

export default function router() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<LandingPage />} />
        </Route>

        <Route path="/login" element={<Guest />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/register" element={<Guest />}>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}