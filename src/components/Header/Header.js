import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="menu">
      <Toolbar variant="dense">
        <NavLink exact to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/movies" className="link">
          Movies
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
