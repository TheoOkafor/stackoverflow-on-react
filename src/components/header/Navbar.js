import React, { Component } from 'react';
import NavItem from './NavItem';
import AuthNavItem from './AuthNavItem';
import loggedIn from '../utilities/checkAuth';

class Navbar extends Component {
  render() {
    const username = localStorage.getItem('username');
    return (
      <nav className="top-link right">
        {loggedIn()
          ? <AuthNavItem username={username} />
          : <NavItem /> }
      </nav>
    );
  }
}

export default Navbar;
