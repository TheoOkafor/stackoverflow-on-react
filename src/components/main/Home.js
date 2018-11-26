import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { fetchQuestions } from '../../actions/questionActions';
import Card from './Card';


class Home extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  shouldComponentUpdate(nextProps){
    const check = this.props.newQuestion === nextProps.newQuestion;
    if(!check) {
      this.props.questions.unshift(nextProps.newQuestion);
      return true;
    }
    return true;
  }

  render() {
    return (
    <div>
      { 
        this.props.questions.map( question => {
          let answer = '';
          let time = '';
          let username = '';
          let answersUserid = '';
          let currAnswers = question.answers? question.answers : [];
          let numAnswers = question.numAnswers || 0;

          // To display accepted answer or any random answer.
          let acceptedAnswer = currAnswers.filter( answer => {
            return answer.accepted;
          });
          if (acceptedAnswer.length > 0){
            answer = acceptedAnswer[0].body;
            time =  new Date(acceptedAnswer[0].timesubmitted).toDateString();
            username = acceptedAnswer[0].username;
            answersUserid = acceptedAnswer[0].userid;
          } else if (numAnswers > 0) {
            let randomIndex = Math.floor(Math.random() * currAnswers.length);
            answer = currAnswers[randomIndex].body;
            time = new Date(currAnswers[randomIndex].timesubmitted)
              .toDateString();
            username = currAnswers[randomIndex].username;
            answersUserid = currAnswers[randomIndex].userid;
          } else {
              answer = 'No answers yet';
              time = '';
              username = '';
          }
          return(
          <Card  key={question.id || question.questionid}>
            <div>
              <h3 className="qs-title">
                <Link to= {`/questions/${question.id || question.questionid}`} 
                className="question">{question.title}</Link>
              </h3>

              <div>
                <h5 className="person-answer"><Link className="inherit"
                to= {`/users/${answersUserid}`}>
                {username}</Link><br />
                  <small>Answered: 	<span>{time}</span></small>
                </h5>
              </div>
              
              <p className="answer">
                {answer}
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
})

Home.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array,
  newQuestion: PropTypes.object,
};

export default connect(mapStateToProps, { fetchQuestions })(Home);
