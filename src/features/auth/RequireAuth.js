import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { getAccessToken } from "../../services/AuthService";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken) ?? getAccessToken();
  const location = useLocation();

  console.log(token);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
