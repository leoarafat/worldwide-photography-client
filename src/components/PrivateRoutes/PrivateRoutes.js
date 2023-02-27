import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../AuthProvider/AuthContext";
import Loader from "../Loading/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(userContext);
const location = useLocation()

  if (loading) {
    return <Loader/>
  }
if(user){
    return children
}
  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;
