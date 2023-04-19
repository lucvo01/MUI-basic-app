import React , { useState, useContext } from 'react'
import Auth from './auth.js';
import AuthContext from "./AuthContext";

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    
    let signin = (newUser, callback) => {
        return Auth.signin(() => {
            setUser(newUser);
            callback();
        })
    };
    
    let signout = (newUser, callback) => {
        return Auth.signout(() => {
            setUser(newUser);
            callback();
        })
    };
    
    let value = {user, signin, signout};

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider