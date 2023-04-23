import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function SearchAppBar() {
  const navigate = useNavigate();
  const auth = React.useContext(AuthContext);
  const location = useLocation();
  // const handleClickLogin = () => {
  //   navigate("/Login");
  // };

  const handleClickLogout = () => {
    auth.signout(() => {
      navigate("/");
    });
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={() => navigate("/")}
          >
            JOB ROUTING
          </Typography>
          <Box sx={{ ml: 2 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center"
            }}
          >
            {auth?.user ? (
              <>
                <p>{auth.user}</p>
                <Button
                  onClick={handleClickLogout}
                  startIcon={<LogoutIcon />}
                  variant="contained"
                  sx={{ marginLeft: "15px" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                // onClick={handleClickLogin}
                component={Link}
                to="/Login"
                // state={{ backgroundLocation: location }}
                startIcon={<LoginIcon />}
                variant="contained"
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
