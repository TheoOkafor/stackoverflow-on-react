import React, { Component } from 'react';
import NavItem from './NavItem';
import AuthNavItem from './AuthNavItem';
import loggedIn from '../utilities/checkAuth';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: loggedIn(),
      username: localStorage.getItem('username'),
    };
  }

  checkAuth() {
    if (loggedIn()) {
      const auth = loggedIn();
      this.setState({
        loggedIn: auth,
        username: localStorage.getItem('username'),
      });
    }
  }

  render() {
    return (
      <nav className="top-link right">
        {this.state.loggedIn
          ? <AuthNavItem username={this.state.username} />
          : <NavItem /> }
      </nav>
    );
  }
}

export default Navbar;
