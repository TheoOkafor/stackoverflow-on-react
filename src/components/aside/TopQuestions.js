import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchQuestions } from '../../actions/questionActions';

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

  shouldComponentUpdate(nextProps) {
    if (nextProps.questions !== this.props.questions) {
      const questionSummary = [];
      let hasAccepted;
      const { questions } = nextProps;
      const data = questions.slice(0).reverse();
      data.forEach((question) => {
        const currAnswers = question.answers;

        const acceptedAns = currAnswers.filter(answer => answer.accepted);
        if (acceptedAns.length > 0) {
          hasAccepted = true;
        } else {
          hasAccepted = false;
        }

        questionSummary.push({
          id: question.id,
          numAnswers: question.numAnswers,
          title: question.title,
          hasAccepted,
        });
      });

      questionSummary.sort((a, b) => {
        return b.numAnswers - a.numAnswers;
      });
      const topQuestions = [];
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
              <p><Link to={`/questions/${questionSummary[i].id}`}>
                { questionSummary[i].title }</Link>
              </p>
            </td>
          </tr>
        );
      }
      this.setState({
        topQuestions,
      });
      return true;
    }
    return true;
  }

  render() {
    return (
      <table className="table" id="top-questions">
        <tbody>
          { this.state.topQuestions }
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
