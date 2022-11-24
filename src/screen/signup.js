import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethod";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import CircularProgress from "@mui/material/CircularProgress";


function Signup() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)


  let signUp = () => {
    setIsLoading(true)
    signUpUser({ email, password })
      .then((success) => {
        setIsLoading(false)
        // Signed in
        console.log(success);
        navigate('/')
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error);
      });
  };
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Box className='signup'>
        <Box className='main' px={4} py={5}>
          <h2 variant="h1" align="center" color="error">Signup
          </h2>
          <Box mt={3} fullWidth>
            <Button variant="outlined" size="large" sx={{ width: '50%', fontWeight: 'bold', color: 'black' }} onClick={() => navigate('/')}>
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
              {isLoading ? <CircularProgress color='inherit' /> : "SIGN UP"}
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
