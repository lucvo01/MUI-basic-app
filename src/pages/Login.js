import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Stack from "@mui/material/Stack";
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: "none",
};

function Login() {
  const navigate = useNavigate();
  let from = navigate.state?.from?.pathname || '/';

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
        <LoginForm callback={() => { navigate(from, {replace: true})}}/>
        </Box>
    </Modal>
  </Stack>
  )
}

export default Login;