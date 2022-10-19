import React from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h2" align="center" color="error">Home</Typography>
                <Box sx={{mt:5}} align="center">
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ width: "20%" }}
                        onClick={() => {
                            navigate("signup");
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>
                <Box sx={{ mt: 5 }} align="center">
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ width: "20%" }}
                        onClick={() => {
                            navigate("login");
                        }}
                    >
                        Log In
                    </Button>
                </Box>
            </>
            )
}

            export default Home