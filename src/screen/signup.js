import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethod";
import { Box } from "@mui/system";

function Signup() {
  let signUp = () => {
    signUpUser({email, password, userName:'Abdul Basit Ahmed', contact:'313125'})
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
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

      <Box style={{ textAlign: "center"}}>
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
      {/* <Button
        onClick={() => {
          navigate("/");
        }}
        variant="contained"
        size="large"
        sx={{ width: "10%" }}
      >
        Back
      </Button> */}
    </>
  );
}

export default Signup;
