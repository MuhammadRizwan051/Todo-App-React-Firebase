import React, { useState } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";
import { loginUser } from "../config/firebasemethod";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import CircularProgress from "@mui/material/CircularProgress";


function Login() {

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  let login = () => {
    setIsLoading(true)
    loginUser({ email, password })
      .then((success) => {
        setIsLoading(false)
        navigate(`/todos/${success.id}`)
        console.log((success))
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  };

  console.log(isLoading)

  return (
    <>
      <Box className='login'>
        <Box className='main' px={4} py={5}>
          <h2 variant="h1" align="center" color="error">Login
          </h2>
          <Box mt={3} fullWidth>
            <Button className='button' variant="contained" size="large" sx={{ width: '50%' }} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="outlined" size="large" sx={{ width: '50%', fontWeight: 'bold', color: 'black' }} onClick={() => navigate('/signup')}>
              SignUp
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
            <Button className='button' variant="contained" size="large" fullWidth onClick={login}>
              {isLoading ? <CircularProgress color='inherit' /> : "Login"}
            </Button>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }}>Create new account <Link to="/signup" style={{ textDecoration: 'none' }}>SIGN UP</Link></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
