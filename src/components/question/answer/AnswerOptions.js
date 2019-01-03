import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../main/Button';

const AnswerOptions = (props) => {
  return (
    <div className="answer-options">
      <div className="message-display">
        <p id={`"vote-mssg-${props.answer.id}"`} />
        <div
          className="loader-xs"
          id={`"vote-${props.answer.id}-loader"`} />
      </div>
      <span className="upvote-display">
        {props.answer.upvotes}
      </span>
      <Button
        styleName="primary-o"
        id={`"vote-${props.answer.id}-up"`}
        name="Upvote" />

      <span className="vote-display">
        {props.answer.downvotes}
      </span>

      <Button
        styleName="link gray"
        id={`"vote-${props.answer.id}-down"`}
        name="Downvote" />
      <Button
        styleName="link"
        value={`"${props.index}"`}
        name="Comment" />
    </div>
  );
};

AnswerOptions.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  // status: PropTypes.boolean,
  answer: PropTypes.object,
};

export default AnswerOptions;
