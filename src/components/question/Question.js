import React from 'react';
import PropTypes from 'prop-types';

const Question = (props) => {
  return (
    <div className="question">
      <h1>{props.question.title}</h1>
      <p className="question-desc">{props.question.body}</p>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
