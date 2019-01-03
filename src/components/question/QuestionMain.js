import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from './Question';
import QuestionMeta from './QuestionMeta';
import AsideRight from '../aside/AsideRight';
import Answer from './Answer';
import { fetchQuestion } from '../../actions/questionActions';
import { acceptAnswer } from '../../actions/answerActions';
import AnswerForm from './AnswerForm';
import checkAccepted from '../utilities/hasAccepted';

class QuestionMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAccepted: null,
    };
    this.handleAccept = this.handleAccept.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.url);
    document.getElementsByClassName('loader')[0].style.display = 'none';
  }

  shouldComponentUpdate(nextProps) {
    const { newAnswer, question } = this.props;
    const checkNewAnswer = newAnswer === nextProps.newAnswer;
    const check = question === nextProps.question;
    const checkAccept = this.props.accepted === nextProps.accepted;
    if (!checkNewAnswer || !checkAccept) {
      this.props.fetchQuestion(this.props.match.url);
      return true;
    }
    if (!check) {
      const accepted = checkAccepted(nextProps.question.answers);
      this.setState({
        hasAccepted: accepted,
      });
      return true;
    }
    return true;
  }

  handleAccept(value, answerId) {
    const questionId = this.props.question.id;
    const payload = {
      questionId,
      answerId,
      value,
    };
    this.props.acceptAnswer(payload);
  }

  render() {
    const { hasAccepted } = this.state;
    return (
      <div className="row-container home">
        <div className="sd-margin-12 d-margin-7">
          <div className="row-container" id="main-container">
            <Question question={this.props.question} />
            <div className="loader" />
            {
              this.props.answers.map((answer, i) => {
                return <Answer
                  key={answer.id}
                  answer={answer}
                  index={i}
                  hasAccepted={hasAccepted}
                  handleAccept={this.handleAccept}
                  question={this.props.question} />;
              })
            }
            <AnswerForm questionId={this.props.match.params.id}/>
          </div>
        </div>
        <AsideRight>
          <QuestionMeta
            question={this.props.question}
            answers={this.props.answers} />
        </AsideRight>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newAnswer: state.answers.answer,
  answers: state.answers.answers,
  question: state.questions.questionWithAnswer,
  accepted: state.answers.accepted,
});

QuestionMain.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  acceptAnswer: PropTypes.func,
  question: PropTypes.object,
  answers: PropTypes.array,
  newAnswer: PropTypes.object,
  match: PropTypes.object,
  accepted: PropTypes.object,
};

export default connect(mapStateToProps, {
  fetchQuestion, acceptAnswer
})(QuestionMain);
