import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnswerOptions extends Component {
  constructor(props) {
    super(props);

    this.handleVoting = this.handleVoting.bind(this);
  }

  handleVoting(event) {
    const { id } = event.target;
    const { value } = event.target;
    const vote = value;
    this.props.handleVoting(vote, id);
  }

  render() {
    return (
      <div className="answer-options">
        <div className="message-display">
          <p id={`vote-mssg-${this.props.answer.id}`} />
          <div
            className="loader-xs"
            id={this.props.answer.id} />
        </div>
        <span className="upvote-display">
          {this.props.answer.upvotes}
        </span>
        <button
          data-testid="upvote"
          className="btn primary-o"
          id={this.props.answer.id}
          value="upvote"
          onClick={this.handleVoting} >
            Upvote
        </button>

        <span className="vote-display">
          {this.props.answer.downvotes}
        </span>

        <button
          data-testid="downvote"
          className="btn link gray"
          id={this.props.answer.id}
          value="downvote"
          onClick={this.handleVoting} >
            Downvote
        </button>
        <button
          className="btn link"
          value={this.props.index}>
            Comment
        </button>
      </div>
    );
  }
}

AnswerOptions.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  answer: PropTypes.object,
  handleVoting: PropTypes.func,
};

export default AnswerOptions;
