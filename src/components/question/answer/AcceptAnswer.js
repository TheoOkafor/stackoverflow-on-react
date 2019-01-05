import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AcceptAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    this.handleAcceptance = this.handleAcceptance.bind(this);
  }

  handleAcceptance(event) {
    const { id } = event.target;
    let { value } = event.target;
    value = value === 'true' ? value === 'true' : false;
    this.props.handleAccept(value, id);
  }

  render() {
    const user = localStorage.getItem('username');
    const hasRight = user === this.props.username;
    const acceptButton = hasRight && !this.props.hasAccepted
      ? <button
        data-testid="accept"
        className="btn accept right"
        value
        id={this.props.answer.id}
        onClick={this.handleAcceptance}>
        Accept Answer
      </button>
      : null;
    const accepted = this.props.answer.accepted
      ? <div className="accepted right default">Accepted</div>
      : null;
    const unacceptButton = !hasRight || !this.props.answer.accepted
      ? null
      : <button
        data-testid="unaccept"
        className="btn unaccept right show"
        id={this.props.answer.id}
        onClick={this.handleAcceptance}>
          Un-accept Answer
      </button>;
    return (
      <div>
        {unacceptButton}
        {acceptButton}
        {accepted}
      </div>
    );
  }
}

AcceptAnswer.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  answer: PropTypes.object,
  hasAccepted: PropTypes.bool,
  username: PropTypes.string,
  handleAccept: PropTypes.func,
};

export default AcceptAnswer;
