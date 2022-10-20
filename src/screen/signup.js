import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethod";
import { Box } from "@mui/system";

function Signup() {
  let signUp = () => {
    signUpUser({ email, password, userName: 'Abdul Basit Ahmed', contact: '313125' })
      .then((success) => {
        // Signed in
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Typography variant="h2" align="center" color="error">
        Signup
      </Typography>

      <Box style={{ textAlign: "center" }}>
        <Box mt={5}>
          <TextField
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box mt={5}>
          <TextField
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box mt={5}>
          <Button variant="contained" size="large" onClick={signUp}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Signup;
