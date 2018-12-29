import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionsTable from './QuestionsTable';
import getUser from '../../actions/userActions';
import TopQuestions from '../aside/TopQuestions';


class UserProfile extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.url);
  }

  render() {
    let display;
    if (this.props.user) {
      const {
        username, created,
        questions, answers,
      } = this.props.user;

      if (questions) {
        questions.map((question) => {
          const acceptedAnswer = question.answers.filter(
            answer => answer.accepted
          );
          question.hasAccepted = acceptedAnswer.length > 0;
          return question;
        });
      }
      const questionNum = questions && questions.length;
      const recentQuestions = questions
        && questions.slice(questionNum - 5, questionNum).reverse();

      const timeJoined = new Date(created).toUTCString();
      display = (
        <div className="row-container home">
          <div className="sd-margin-12 d-margin-3">
            <div className="card margin-top-30" id="profile-summary">
              <h4
                className="margin-bottom-20"><span className="profile-username">
                  {username}</span>'s Summary</h4>

              <ul className="list list-unstyled">
                <li>Joined: <b>{timeJoined}</b></li>
                <li><b>{questions ? questionNum : 0}</b> Questions</li>
                <li><b>{answers ? answers.length : 0}</b> Answers</li>
              </ul>
            </div>
          </div>

          <div
            className="sd-margin-12 d-margin-6 margin-bottom-30"
            id="main-container">
            <div
              className="row-container margin-top-30 margin-bottom-20">
              <h3>Recent Questions by
                <span
                  className="profile-username"> {username && username}
                </span>
              </h3>
              <QuestionsTable questions={recentQuestions} />
            </div>

            <div className="row-container">
              <h3>All
                <span
                  id="all-questions"> {questions && questions.length} </span>
                  Questions by
                <span
                  className="profile-username"> {username && username}</span>
              </h3>

              <QuestionsTable questions={questions} />
            </div>
          </div>

          <div className="sd-margin-12 d-margin-3">
            <div>
              <h3 className="side-title">Top Questions with Most Answers</h3>
              <TopQuestions />
            </div>
          </div>
        </div>
      );
    } else {
      display = 'User not found';
    }
    return display;
  }
}
const mapStateToProps = state => ({
  user: state.userProfile.user,
});

UserProfile.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getUser })(UserProfile);
