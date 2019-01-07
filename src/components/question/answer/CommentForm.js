import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postComment } from '../../../actions/answerActions';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        body: '',
      },
      serverResponse: {
        message: '',
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.postCommentHandler = this.postCommentHandler.bind(this);
  }

  changeHandler(event) {
    const { value } = event.target;
    this.setState({
      comment: {
        body: value,
      },
    });
  }

  postCommentHandler(event) {
    event.preventDefault();
    const { comment } = this.state;
    const { questionid, id } = this.props.answer;
    const payload = {
      questionid,
      id,
      comment,
    };
    this.props.postComment(payload);
    this.setState({
      comment: {
        body: '',
      },
    });
  }

  render() {
    const { commentFormVisible } = this.props;
    const show = commentFormVisible ? 'visible' : 'no-show';
    return (
      <form className={`comment-form ${show}`}>
        <div className="message-display">
          <p id={`server-message-${this.props.answer.id}`} />
          <div
            className="loader-xs"
            id={`comment-${this.props.answer.id}-loader`} />
        </div>
        <textarea
          data-testid="commentArea"
          placeholder="Comment on this answer"
          id={`comment-box-${this.props.answer.id}`}
          onChange={this.changeHandler} />
        <button
          data-testid="commentBtn"
          className="btn primary"
          id={`comment-${this.props.answer.id}`}
          onClick={this.postCommentHandler}>
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
  commentFormVisible: PropTypes.bool,
  postComment: PropTypes.func,
};

export default connect(null, { postComment })(CommentForm);
