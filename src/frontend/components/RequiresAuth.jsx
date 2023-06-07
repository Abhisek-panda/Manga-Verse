import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../..";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { token } = useAuthContext();
  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};
