import * as React from "react";
import Stack from "@mui/material/Stack";
import LoginForm from "./LoginForm";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: "none"
};

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login location", location);
  let from = location.state?.backgroundLocation
    ? location.pathname.backgroundLocation
    : "/";

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <Stack>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginForm
            callback={() => {
              navigate(from);
            }}
          />
        </Box>
      </Modal>
    </Stack>
  );
}

export default Login;
