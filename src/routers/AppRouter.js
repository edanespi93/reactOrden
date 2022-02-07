import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginScreen from "../components/auth/LoginScreen";
import OrdenScreen from "../components/orden/OrdenScreen";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "./../actions/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  useEffect(() => {
    const username = localStorage.getItem("username") || "";
    const password = localStorage.getItem("password") || "";
    if (username.length < 2 || password.length < 2) {
      return;
    }
    dispatch(startLogin({ username, password }));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute verifyUid={uid} />}>
          <Route path="/*" element={<OrdenScreen />} />
        </Route>

        <Route element={<PublicRoute verifyUid={uid} />}>
          <Route path="/auth/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
