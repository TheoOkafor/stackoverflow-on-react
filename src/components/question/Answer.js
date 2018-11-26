import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import AnswerOptions from './answer/AnswerOptions';
import AcceptAnswer from './answer/AcceptAnswer';
import Comment from './answer/Comment';

const Answer = (props) => {
  return (
    <div className="answer-card">
      <div>
        <h4 className="person-answer left">
        <Link to={`/users/${props.answer.userid}`}
            className="inherit">{props.answer.username}</Link>
          <br />
          <small>Answered: 
          <span>{new Date(props.answer.timesubmitted).toDateString()}
          </span></small>
        </h4>

        <div className="clear-fix"></div>
        <p className="answer" id={`"ans-${props.answer.id}"`}>
          {props.answer.body}
        </p>

        <AcceptAnswer answer={props.answer} index={props.index} />
        <AnswerOptions answer={props.answer} index={props.index} />

        <Comment answer={props.answer} />
      </div>
		</div>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
  index: PropTypes.number,
};

export default Answer;
