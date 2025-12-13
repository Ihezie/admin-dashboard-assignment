import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const ProtectedRoute = () => {
  // placeholder for auth logic
  const isAuthenticated = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  if (!isAuthenticated) {
    return;
  }

  return <Outlet />;
};
export default ProtectedRoute;
