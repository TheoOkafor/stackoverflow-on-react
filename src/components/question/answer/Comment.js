import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentForm from './CommentForm';
import CommentDisp from './CommentDisp';

class Comment extends Component {

  render() {
    return(
      <div className="comments">
        {
          this.props.answer.comments.map((comment) => {
            return (<CommentDisp key={comment.id} comment={comment} />)
          })
        }
        <CommentForm answer={this.props.answer} />
      </div>
    );
  }
}

Comment.propTypes = {
  answer: PropTypes.object,
};

export default Comment;
