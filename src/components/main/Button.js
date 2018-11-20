import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn ${ props.styleName }`} id={ props.id }>
      {props.value || props.children}
    </button>
  );
}

Button.propTypes = {
  styleName: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.element,
  value: PropTypes.string,
};

export default Button;
