import React, { Component } from 'react';
import Button from '../main/Button';
import { Link } from "react-router-dom";

class Navbar extends Component {
render() {
  return (
      <nav className="top-link right">
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
            <Link to="/users/" 
              className="inherit"><b>Chinaza</b>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="inherit" id="logout">logout</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
