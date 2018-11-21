import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className={`card ${ props.styleName }`} id={ props.id } >
      {props.children}
    </div>
  );
}

Card.propTypes = {
  styleName: PropTypes.string,
  id: PropTypes.number,
  children: PropTypes.element,
}

export default Card;
