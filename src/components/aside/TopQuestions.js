import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchQuestions } from '../../actions/questionActions';
import hasAccepted from '../utilities/hasAccepted';

class TopQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topQuestions: [],
    };
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const topQuestions = [];
    if (this.props.questions.length > 0) {
      const { questions } = this.props;
      const questionSummary = [];
      const data = questions.slice(0).reverse();
      data.forEach((question) => {
        const accepted = hasAccepted(question.answers);
        questionSummary.push({
          id: question.id,
          numAnswers: question.numAnswers,
          title: question.title,
          hasAccepted: accepted,
        });
      });

      questionSummary.sort((a, b) => {
        return b.numAnswers - a.numAnswers;
      });
      for (let i = 0; i < 6; i += 1) {
        topQuestions.push(
          <tr key={questionSummary[i].id}>
            <td>
              <p
                className={
                  `num-answer
                ${questionSummary[i].hasAccepted ? 'selected' : ''}`}>
                { questionSummary[i].numAnswers }
              </p>
            </td>
            <td>
              <p><a href={`${
                window.location.href.split('/')[0]}/questions/${
                questionSummary[i].id}`}>
                { questionSummary[i].title }</a>
              </p>
            </td>
          </tr>
        );
      }
    }
    return (
      <table className="table" id="top-questions">
        <tbody>
          { topQuestions }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions,
});

TopQuestions.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array,
};

export default connect(mapStateToProps, { fetchQuestions })(TopQuestions);
