import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

function Home() {
    const navigate = useNavigate()
    return (
        <>
            <Box align='center' mt={'10%'}>
                <Box>
                    <Button variant="contained" size="large" sx={{width:'15%'}} onClick={() => navigate('/login')}>
                        Login
                    </Button>
                </Box>
                <Box mt={5}>
                    <Button variant="contained" size="large" sx={{width:'15%'}} onClick={() => navigate('/signup')}>
                        SignUp
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Home