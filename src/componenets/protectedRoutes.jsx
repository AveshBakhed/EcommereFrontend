import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = JSON.parse(localStorage.getItem("token"));

  // Not logged in → send to login and keep where they came from
  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  // Logged in → render child route

  return <Outlet />;
}
