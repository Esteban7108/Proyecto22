import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default PublicRoute;
