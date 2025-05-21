import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/authentication/Login";
import { SignUp } from "./pages/authentication/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
