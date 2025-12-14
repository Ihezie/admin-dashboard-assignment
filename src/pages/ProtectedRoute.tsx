import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const ProtectedRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  // placeholder for auth logic
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
