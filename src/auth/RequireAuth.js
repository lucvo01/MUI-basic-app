import React, { useContext } from 'react'
import AuthContext from './AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function RequireAuth({children}) {
    let auth = useContext(AuthContext);
    let location = useLocation

    if(!auth.user){
        return <Navigate to="/Login" state = {{from : location}} replace/>;
    }

  return children;
}

export default RequireAuth