import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from './Question';
import QuestionMeta from './QuestionMeta';
import AsideRight from '../aside/AsideRight';
import Answer from './Answer';
import { fetchQuestion } from '../../actions/questionActions';
import AnswerForm from './AnswerForm';

class QuestionMain extends Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.url);
    document.getElementsByClassName('loader')[0].style.display = 'none';
  }

  shouldComponentUpdate(nextProps) {
    const check = this.props.newAnswer === nextProps.newAnswer;
    if (!check) {
      this.props.fetchQuestion(this.props.match.url);
      return true;
    }
    return true;
  }

  render() {
    return (
      <div className="row-container home">
        <div className="sd-margin-12 d-margin-7">
          <div className="row-container" id="main-container">
            <Question question={this.props.question} />
            <div className="loader" />
            {
              this.props.answers.map((answer, i) => {
                return <Answer key={answer.id} answer={answer} index={i} />;
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
});

QuestionMain.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  question: PropTypes.object,
  answers: PropTypes.array,
  newAnswer: PropTypes.object,
  match: PropTypes.object,
};

export default connect(mapStateToProps, { fetchQuestion })(QuestionMain);
