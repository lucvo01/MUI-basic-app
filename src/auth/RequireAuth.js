import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  let auth = useContext(AuthContext);
  let location = useLocation;
  // const navigate = useNavigate();
  if (!auth.user) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
    // navigate("/Login", { replace: true, state: location });
    // return navigate({
    //   to: "/Login",
    //   options: { replace: true, state: location }
    // });
  }

  return children;
}

export default RequireAuth;
