import React, { useState } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";
import { loginUser } from "../config/firebasemethod";
import { useNavigate } from "react-router-dom";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  let login = () => {
    loginUser({ email, password })
      .then((success) => {

        navigate('/todos')
        console.log((success))
      })
      .catch((error) => {
        console.log(error)
      })
  };

  return (
    <>
      <Typography variant="h2" align="center" color="error">Log In
      </Typography>
      <Box style={{ textAlign: "center" }}>
        <Box mt={5}>
          <TextField
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            sx={{width:'50%', padding:'5px 0px'}}
          />
        </Box>
        <Box mt={5}>
          <TextField
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{width:'50%', padding:'5px 0px'}}
          />
        </Box>
        <Box mt={5}>
          <Button variant="contained" size="large" onClick={login}>
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;
