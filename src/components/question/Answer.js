import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AnswerOptions from './answer/AnswerOptions';
import AcceptAnswer from './answer/AcceptAnswer';
import Comment from './answer/Comment';

class Answer extends Component {
  constructor(props) {
    super(props);

    this.overlayDel = React.createRef();
    this.state = {
      commentFormVisible: false,
    };
    this.showCommentForm = this.showCommentForm.bind(this);
  }

  showCommentForm() {
    const { commentFormVisible } = this.state;
    this.setState({
      commentFormVisible: !commentFormVisible,
    });
  }

  render() {
    const { commentFormVisible } = this.state;
    return (
      <div className="answer-card">
        <div>
          <h4 className="person-answer left">
            <Link to={`/users/${this.props.answer.userid}`}
              className="inherit">{this.props.answer.username}</Link>
            <br />
            <small>Answered:
              <span>{new Date(this.props.answer.timesubmitted).toDateString()}
              </span></small>
          </h4>

          <div className="clear-fix" />
          <p className="answer" id={`"ans-${this.props.answer.id}"`}>
            {this.props.answer.body}
          </p>

          <AcceptAnswer
            answer={this.props.answer}
            index={this.props.index}
            hasAccepted={this.props.hasAccepted}
            username = {this.props.question.username}
            handleAccept={this.props.handleAccept} />
          <AnswerOptions
            answer={this.props.answer}
            index={this.props.index}
            handleVoting={this.props.handleVoting}
            showCommentForm={this.showCommentForm} />

          <Comment
            answer={this.props.answer}
            commentFormVisible={commentFormVisible} />
        </div>
      </div>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.object,
  index: PropTypes.number,
  hasAccepted: PropTypes.bool,
  question: PropTypes.object,
  handleAccept: PropTypes.func,
  handleVoting: PropTypes.func,
};

export default Answer;
