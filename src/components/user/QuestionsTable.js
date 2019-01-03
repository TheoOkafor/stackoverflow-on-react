import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuestionsTable = (props) => {
  const { questions } = props;
  return (
    <table className="table" id="top-questions">
      <tbody>
        {
          questions
          && questions.map(question => <tr key={question.id}>
            <td>
              <p>
                <Link
                  to={`/questions/${question.id}`}
                  className="question">
                  {question.title}
                </Link>
              </p>
            </td>
            <td>
              <p
                className=
                  {`num-answer ${question.hasAccepted ? 'selected' : ''}`}>
                {question.answers.length}
              </p>
            </td>
          </tr>)}
      </tbody>
    </table>
  );
};

QuestionsTable.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsTable;
