import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ verifyUid }) => {
  return verifyUid ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
