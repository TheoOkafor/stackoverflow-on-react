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

    this.overlayDel = React.createRef();
    this.state = {
      hasAccepted: null,
      delClass: null,
    };
    this.handleAccept = this.handleAccept.bind(this);
    this.showDelOverlay = this.showDelOverlay.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  showDelOverlay() {
    this.setState({
      delClass: 'block',
    });
  }

  cancelDelete() {
    this.setState({
      delClass: 'none',
    });
  }

  handleDelete() {
    const token = localStorage.getItem('x-access-token');
    const url = `https://stackoverflow-by-theo1.herokuapp.com/v1${
      this.props.match.url}`;
    fetch(url, {
      method: 'delete',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token,
      }),
    })
      .then(response => response.json())
      .then((result) => {
        if (result.statusCode === 201) {
          return window.location.replace(window.location.href.split('/')[0]);
        }
      });
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
            answers={this.props.answers}
            showDelOverlay={this.showDelOverlay} />
        </AsideRight>
        <div
          ref={this.overlayDel}
          id="overlay-delete"
          style={{ display: this.state.delClass }}>
          <div className="card" >
            <p>
              This question will be DELETED permanently
              (this CANNOT be reversed)
            </p>
            <button
              className="btn"
              id="delete-confirm"
              onClick={this.handleDelete} >
              OK, Delete Question
            </button>
            <button
              className="btn primary-o"
              id="delete-cancel"
              onClick={this.cancelDelete}>
              Cancel
            </button>
          </div>/>
        </div>
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
