import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class QuestionMeta extends Component {
  render() {
    const { question, answers } = this.props;
    return (
      <div className="card margin-top-30 question-extra">
        <ul className="list list-unstyled">
          <li>Time asked:
            <b> {new Date(question.timesubmitted).toDateString()}</b>
          </li>
          <li>
            Answers: <b>{answers && answers.length}</b>
          </li>
          <li>Asked by:
            <Link to={`/users/${question.userid}`}
              className="inherit">
              <b> {question.username}</b>
            </Link>
          </li>
        </ul>
        {/* ${deleteButton} */}
      </div>
    );
  }
}

QuestionMeta.propTypes = {
  question: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
};

export default QuestionMeta;
