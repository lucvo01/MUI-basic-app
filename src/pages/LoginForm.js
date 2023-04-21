// import React, { useState, useContext, useCallback } from "react";
// import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
// import Sheet from '@mui/joy/Sheet';
// import Typography from '@mui/joy/Typography';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
// import AuthContext from '../auth/AuthContext.js'
// import Box from "@mui/material/Box";

// function LoginForm({callback}) {
// const [username, setUsername] = useState("lucvo01");
// const [password, setPassword] = useState("123");

// const auth = useContext(AuthContext)
// // const [showPassword, setshowPassword] = useState(false);

// // const handleClickShowPassword = (event) => {
// //     setshowPassword(!showPassword);
// // }

// const handleLogin = (event) => {
//     auth.signin(username, callback);
// }
//   return (

//     <CssVarsProvider>
//     <Box>
//       <Sheet
//         sx={{
//           width: 300,
//           mx: 'auto', // margin left & right
//           my: 4, // margin top & bottom
//           py: 3, // padding top & bottom
//           px: 2, // padding left & right
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//           borderRadius: 'sm',
//           boxShadow: 'md',
//         }}
//         variant="outlined"
//       >
//         <div>
//           <Typography level="h4" component="h1">
//             <b>Welcome!</b>
//           </Typography>
//           <Typography level="body2">Sign in to continue.</Typography>
//         </div>
//         <FormControl>
//           <FormLabel>Email</FormLabel>
//           <Input
//             // html input attribute
//             name="email"
//             type="email"
//             placeholder="johndoe@email.com"
//             value = {username}
//           />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             // html input attribute
//             name="password"
//             type="password"
//             placeholder="password"
//             value = {password}
//           />
//         </FormControl>

//         <Button sx={{ mt: 1 /* margin top */ }} onClick={handleLogin}>Log in</Button>
//         <Typography
//           endDecorator={<Link href="/sign-up">Sign up</Link>}
//           fontSize="sm"
//           sx={{ alignSelf: 'center' }}
//         >
//           Don&apos;t have an account?
//         </Typography>
//       </Sheet>
//     </Box>
//   </CssVarsProvider>

//   )
// }

// export default LoginForm;

import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AuthContext from "../auth/AuthContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  width: "300px",
  border: "1px solid",
  padding: "10px",
  borderRadius: "5px",
};

function LoginForm({ callback }) {
  const [username] = useState("trancaodua");
  const [password] = useState("123");

  const auth = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    auth.signin(username, callback);
  };

  return (
    <Box sx={style} component="form" gap={4}>
      <Typography variant="h4" component="div">
        Login
      </Typography>
      <TextField
        disabled
        label="Username"
        default="user"
        value={username}
        sx={{ m: 1 }}
      />
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          disabled
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        onClick={handleLogin}
        sx={{ m: 1, width: "10ch" }}
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
