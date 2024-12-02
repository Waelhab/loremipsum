import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    // If no user is logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the children components
  return children;
};

export default ProtectedRoute;
