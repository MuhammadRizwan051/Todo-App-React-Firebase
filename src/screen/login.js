import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h2" align="center" color="error">Log In
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ width: "10%" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
    </>
  );
}

export default Login;
