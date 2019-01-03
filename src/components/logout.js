import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * Functional component to reset localstorage
 * and redirect the user to the homepage
 * @returns {ReactObject} Redirect component
 */
const Logout = () => {
  localStorage.clear();
  return (
    <Redirect to="/" />
  );
};

export default Logout;
