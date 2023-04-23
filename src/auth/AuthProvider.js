import React , { useState, useContext } from 'react'
// import Auth from './Auth.js';
import AuthContext from "./AuthContext";

const Auth = {
    isAuthenticated: false,
    signin: function(callback) {
      Auth.isAuthenticated = true;
      setTimeout(callback, 100);
    },
    signout: function(callback) {
      Auth.isAuthenticated = false;
      setTimeout(callback, 100);
    }
  }

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    
    let signin = (newUser, callback) => {
        return Auth.signin(() => {
            setUser(newUser);
            callback();
        })
    };
    
    let signout = (callback) => {
        return Auth.signout(() => {
            setUser(null);
            callback();
        })
    };
    
    let value = {user, signin, signout};

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider