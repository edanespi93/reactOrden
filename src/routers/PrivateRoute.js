import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ verifyUid }) => {
  return verifyUid ? <Outlet /> : <Navigate to="auth/login" />;
};

export default PrivateRoute;
