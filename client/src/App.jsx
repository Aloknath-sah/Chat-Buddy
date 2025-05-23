import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/authentication/Login";
import { SignUp } from "./pages/authentication/SignUp";
import { useDispatch, useSelector } from "react-redux";
//import {login} from './store/slice/userSlice'
import { getUserProfileThunk, loginUserThunk } from "./store/slice/user.thunk";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const authstate = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUserThunk());
    (async () => {
      dispatch(getUserProfileThunk());
    })();
  }, []);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
