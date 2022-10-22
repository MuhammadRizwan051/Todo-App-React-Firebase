import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethod";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';



function Signup() {
  const navigate = useNavigate()

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
      {/* <Typography variant="h2" align="center" color="error">
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
      </Box> */}





      <Box className='signup'>
        <Box className='main' px={4} py={5}>
          <h2 variant="h1" align="center" color="error">Signup
          </h2>
          <Box mt={3} fullWidth>
            <Button variant="outlined" size="large" sx={{ width: '50%', fontWeight: 'bold', color: 'black' }} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button className='button' variant="contained" size="large" sx={{ width: '50%' }} onClick={() => navigate('/signup')}>
              Signup
            </Button>
          </Box>
          <Box mt={4}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box my={2}>
            <Button className='button' variant="contained" size="large" fullWidth onClick={signUp}>
              SIGNUP
            </Button>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold', }}>Already have an account ? <Link to="/login" style={{ textDecoration: 'none' }}>LOGIN</Link></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Signup;
