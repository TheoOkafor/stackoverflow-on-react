import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CommentDisp = (props) => {
  return (
    <p className="comment-display">
      <small>{props.comment.body}
        <span className="right">
          <Link to= {`/users/${props.comment.userid}`}
            className="inherit">
            <b>{props.comment.username}</b>
          </Link>
          ({new Date(props.comment.timesubmitted).toDateString()})
        </span>
      </small>
    </p>
  );
};

CommentDisp.propTypes = {
  comment: PropTypes.object,
};

export default CommentDisp;
