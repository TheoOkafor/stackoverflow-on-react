import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postAnswer } from '../../actions/answerActions';
import Button from '../main/Button';

class AnswerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {
        body: '',
      },
      serverResponse: {
        message: '',
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.postAnswerHandler = this.postAnswerHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      [event.target.id]: {
        body: event.target.value,
      },
    });
  }

  postAnswerHandler(event) {
    event.preventDefault();
    const { answer } = this.state;
    this.props.postAnswer(answer, this.props.questionId);
  }

  render() {
    return (
      <div className="answer-card">
        <form onSubmit={this.postAnswerHandler}>
          <div id="user-name">
            <h4><a href="" className="inherit" /><small>(you)</small></h4>
          </div>
          <div className="message-display">
            <p id="server-message" />
            <div className="loader-xs" id="add-answer-loader" />
          </div>
          <div className="answer-form">
            <textarea rows="4"
              placeholder="Type your answer here"
              id="answer"
              value= {this.state.answer.body}
              onChange={this.changeHandler} />

            <div className="btn-group">
              <Button
                className="answer-btn"
                styleName="primary"
                id="add-answer"
                onClick="activateLoaderXs(this.id)"
                name="Add Answer" />
              <input type="reset" value="Cancel"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AnswerForm.propTypes = {
  postAnswer: PropTypes.func.isRequired,
  match: PropTypes.object,
  questionId: PropTypes.string,
};

export default connect(null, { postAnswer })(AnswerForm);
