import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchQuestions } from '../../actions/questionActions';
import Card from './Card';


class Home extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  shouldComponentUpdate(nextProps) {
    const check = this.props.newQuestion === nextProps.newQuestion;
    if (!check) {
      this.props.questions.unshift(nextProps.newQuestion);
      return true;
    }
    return true;
  }

  render() {
    return (
      <div>
        {
          this.props.questions.map((question) => {
            const featuredAnswer = {
              answer: 'No answers yet',
              time: '',
              username: '',
              answersUserid: '',
            };
            const currAnswers = question.answers ? question.answers : [];
            const numAnswers = question.numAnswers || 0;

            const acceptedAnswer = currAnswers.filter((answer) => {
              return answer.accepted;
            });
            if (acceptedAnswer.length > 0) {
              featuredAnswer.answer = acceptedAnswer[0].body;
              featuredAnswer.time = new Date(
                acceptedAnswer[0].timesubmitted
              ).toDateString();

              featuredAnswer.username = acceptedAnswer[0].username;
              featuredAnswer.answersUserid = acceptedAnswer[0].userid;
            } else if (numAnswers > 0) {
              const randomIndex = Math.floor(
                Math.random() * currAnswers.length
              );
              featuredAnswer.answer = currAnswers[randomIndex].body;
              featuredAnswer.time = new Date(
                currAnswers[randomIndex].timesubmitted
              ).toDateString();
              featuredAnswer.username = currAnswers[randomIndex].username;
              featuredAnswer.answersUserid = currAnswers[randomIndex].userid;
            }
            return (
              <Card key={question.id || question.questionid}>
                <div>
                  <h3 className="qs-title">
                    <Link
                      to= {`/questions/${question.id || question.questionid}`}
                      className="question">{question.title}</Link>
                  </h3>

                  <div>
                    <h5 className="person-answer"><Link className="inherit"
                      to= {`/users/${featuredAnswer.answersUserid}`}>
                      {featuredAnswer.username}</Link><br />
                    <small>Answered: <span>{featuredAnswer.time}</span></small>
                    </h5>
                  </div>

                  <p className="answer">
                    {featuredAnswer.answer}
                  </p>
                  <h6>Answers: <span>{numAnswers}</span></h6>
                </div>
              </Card>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions,
  newQuestion: state.questions.question,
});

Home.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array,
  newQuestion: PropTypes.object,
};

export default connect(mapStateToProps, { fetchQuestions })(Home);
