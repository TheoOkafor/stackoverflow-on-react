import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn ${props.styleName}`}
      id={props.id}
      value={props.value}>
      {props.name || props.children}
    </button>
  );
};

Button.propTypes = {
  styleName: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.element,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
