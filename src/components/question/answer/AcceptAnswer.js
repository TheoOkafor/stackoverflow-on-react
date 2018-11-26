import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../main/Button';

class AcceptAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div>
        <div className={`accepted right default`}>Accepted</div>
        <Button styleName="accept right" value={`${this.props.index}`} 
          id={`acc-${this.props.answer.id}`}
          name="Accept Answer" />

        <Button styleName={`unaccept right`} 
          value={`${this.props.index}`} 
          id={`un-${this.props.answer.id}`}
          name="Un-accept Answer" />
      </div>
    );
  }
}

AcceptAnswer.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  // status: PropTypes.string,
  answer: PropTypes.object,
};

export default AcceptAnswer;
