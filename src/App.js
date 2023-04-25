import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Layout from "./pages/Layout.js";
import Login from "./pages/Login.js";
import JobDetail from "./components/JobDetailModal.js";
import AuthContext from "./auth/AuthContext.js";
import { useLocation } from "react-router-dom";
// import { Stack } from "@mui/material";

function App() {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
      {state && auth.user ? (
        <Routes>
          <Route path="/JobDetail/:id" element={<JobDetail />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/JobDetail/:id"
            element={<Login />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
