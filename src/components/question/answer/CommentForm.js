import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  render() {
    return (
      <form className="comment-form">
        <div className="message-display">
          <p id={`server-message-${this.props.answer.id}`} />
          <div
            className="loader-xs"
            id={`comment-${this.props.answer.id}-loader`} />
        </div>
        <textarea
          placeholder="Comment on this answer"
          id={`comment-box-${this.props.answer.id}`} />
        <button
          className="btn primary"
          id={`comment-${this.props.answer.id}`}
        >
          Post Comment
        </button>
        <input type="reset" value="Cancel" />
      </form>
    );
  }
}

CommentForm.propTypes = {
  comments: PropTypes.object,
  answer: PropTypes.object,
};

export default CommentForm;
