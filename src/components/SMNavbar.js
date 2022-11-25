import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { checkUser, logoutUser } from '../config/firebasemethod';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";


const drawerWidth = 240;

function DrawerAppBar(props) {
    const { user } = props

    const navigate = useNavigate()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logout = () => {
        logoutUser().then(() => {
            navigate('/login')
        }).catch((err) => {
            console.log(err)
        })
    }

    let checkAuth = () => {
        checkUser()
            .then(() => {
                console.log('User Login')
            })
            .catch((err) => {
                console.log('User Log out')
                navigate("/login");
            });
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: 'cursive' }}>
                {user}
            </Typography>
            <Divider />
            {/* <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding onClick={() => navigate(`/${item.url}`)}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const loginDataFromReducer = useSelector(a => a.loginReducer)  // we receive whole reducer here in parameter 'a' which we send from store.js
    console.log(loginDataFromReducer)  // Object receive  loginSlice(initialState) data

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'cursive', fontSize: '28px' }}
                    >
                        {user}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button sx={{ color: '#fff', fontSize: '18px', ml: 2, fontWeight: 'bold', fontFamily: 'arial' }} onClick={() => navigate('/')}>Home</Button>
                        <Button sx={{ color: '#fff', fontSize: '18px', ml: 2, fontWeight: 'bold', fontFamily: 'arial' }} onClick={() => navigate('/todos')}>Todos</Button>
                        <Button sx={{ color: '#fff', fontSize: '18px', ml: 2, fontWeight: 'bold', fontFamily: 'arial' }} onClick={logout}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;