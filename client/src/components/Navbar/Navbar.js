import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'
import { Link } from 'react-router-dom';


const pages = [
                {
                  name: 'Controles',
                  path: 'controlls'
                },
                {
                    name: 'Sensores en Vivo',
                    path: 'livesensors'
                  },
                {
                  name: 'Contacto',
                  path: 'Contact'
                },
                {
                  name: 'FAQ',
                  path: 'faq'
                }
              ]

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
              
            <Link to={'/'}>
              <img src="/smg-light-logo.png" alt="logo" className='img-custom'></img>
            </Link>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages && pages.map((page, i) => (
                    <MenuItem key={i} onClick={handleCloseNavMenu}>
                      <Link to={`${page.path}`}>
                        <Typography textAlign="center" >{page.name}</Typography>
                      </Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
              <Button
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`${page.path}`} style={{color: 'white'}}>
                  {page.name}
                </Link>
              </Button>
            ))}
            </Box>
            
            <div className='nav-button-login'>
              {/* <Button variant="contained" >Login</Button> */}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default NavBar;
