import React, { Component } from 'react';

class QuestionMeta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  render() {
    return (
      <div className="card margin-top-30 question-extra">
        <ul className="list list-unstyled">
          <li>Time asked: 
            <b>{new Date(this.props.question.timesubmitted).toDateString()}</b>
          </li>
          <li>
            Answers: <b>{this.props.answers && this.props.answers.length}</b>
          </li>
          <li>Asked by: 
            <a href={`"${location.href.split('/')[0]}/users/${this.props.question.userid}"`} 
              className="inherit">
            <b>{this.props.question.username}</b></a>
          </li>
        </ul>
        {/* ${deleteButton} */}
      </div>
    );
  }
}

export default QuestionMeta;
