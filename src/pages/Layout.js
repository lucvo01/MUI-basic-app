import React from "react";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

function Layout() {
  return (
    <Stack>
      <Outlet />
      <Box />
    </Stack>
  );
}

export default Layout;
