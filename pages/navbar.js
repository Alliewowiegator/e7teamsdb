import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1,  textAlign: 'center', display: {xs: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
        Epic Seven Teams Database
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1,  textAlign: 'left', display: {xs: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
        Epic Seven Teams Database
      </Typography>
    </Toolbar>
  </AppBar>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
