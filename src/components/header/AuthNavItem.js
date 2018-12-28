import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../main/Button';

const AuthNavItem = (props) => {
  return (
    <ul className="list list-unstyled">
      <li className="search-container">
        <input type="search" name="search"
          placeholder="Which question?" />
        <Button styleName="primary" id="search-btn" name="Search" />
      </li>
      <li>
        <Link to="/" className="inherit">
          Ask Question
        </Link>
      </li>
      <li>
        <Link to={`/users/${props.username}`}
          className="inherit"><b>{props.username}</b>
        </Link>
      </li>
      <li>
        <Link to="/logout" className="inherit" id="logout">logout</Link>
      </li>
    </ul>
  );
};

AuthNavItem.propTypes = {
  username: PropTypes.string,
};

export default AuthNavItem;
