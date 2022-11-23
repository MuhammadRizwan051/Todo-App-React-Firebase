import { Button, CircularProgress } from '@mui/material'
import React from 'react'

function SMButton(props) {
    const { variant, onClick, color, label, disabled, sx, size, loading, className, fullWidth } = props
    // console.log(disabled)
    return (
        <>
            <Button variant={variant ?? 'contained'} onClick={onClick} disabled={disabled} color={color} sx={sx} size={size} className={className} fullWidth={fullWidth}>
                {loading ? <CircularProgress sx={{ color: 'inherit' }} thickness='5' /> : label}
            </Button>
        </>
    )
}

export default SMButton
