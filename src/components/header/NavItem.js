import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../main/Button';

const NavItem = () => {
  return (
    <ul className="list list-unstyled">
      <li className="search-container">
        <input type="search" name="search"
          placeholder="Which question?" />
        <Button styleName="primary" id="search-btn" name="Search" />
      </li>
      <li>
        <Link to="/" className="inherit">
            Ask Question</Link>
      </li>
      <li>
        <Link to="/signup"
          className="inherit">Sign up
        </Link>
      </li>
      <li>
        <Link to="/signin" className="inherit" id="logout">Sign in</Link>
      </li>
    </ul>
  );
};

export default NavItem;
