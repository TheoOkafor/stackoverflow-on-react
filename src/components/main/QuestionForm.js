import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postQuestion } from '../../actions/questionActions';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: {
        length: 0,
        content: '',
        message: '',
      },
      description: {
        length: 0,
        content: '',
        message: '',
      },
      serverResponse: {
        message: '',
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.postQuestionHandler = this.postQuestionHandler.bind(this);

  }

  changeHandler(event) {
    let newLength = event.target.value.trim().length;
    this.setState({
      [ event.target.id ]: {
        length: newLength,
        content: event.target.value,
        message: `${newLength} characters (${event.target.id})`,
      },
    });
  }
  
  postQuestionHandler(event) {
    event.preventDefault();
    const { title, description } = this.state;
    const question = {
      title: title.content,
      body: description.content,
    }
    this.props.postQuestion(question);
  }


  // componentDidMount() {

  //     .then( (result) => {
  //       mssgDisp.nextElementSibling.style.display = 'none';
  //       if (result.statusCode === 201) {
  //         mssgDisp.setAttribute('class', 'text-success');
  //         mssgDisp.innerHTML = result.message;

  //         setTimeout(location.reload(true), 3000); //Reload the page from server
  //       } else if(result.statusCode === 401) {
  //         mssgDisp.setAttribute('class', 'text-danger');
  //         mssgDisp.innerHTML = 'You need to Sign in';
  //         logout();
  //       } else {
  //         mssgDisp.setAttribute('class', 'text-danger');
  //         mssgDisp.innerHTML = result.error;
  //       }
  //     })
  //     .catch(error =>{
  //       console.log(error);
  //     });
  //   });

  //   // Check post character length
  //   const titleCharLength = () => {
  //     lengthDisp.innerHTML = `${titleInput.value.length} Characters (title)`;
  //     if (titleInput.value.trim().length <= 50) {
  //       lengthDisp.setAttribute('class', 'text-success');
  //     } else {
  //       lengthDisp.setAttribute('class', 'text-danger');
  //     }
  //   }

  //   // Description
  //   const bodyCharLength = () => {
  //     lengthDisp.innerHTML = `${description.value.length} Characters (description)`;
  //     if (description.value.trim().length <= 250) {
  //       lengthDisp.setAttribute('class', 'text-success');
  //     } else {
  //       lengthDisp.setAttribute('class', 'text-danger');
  //     }
  //   }
  // }

  render() {
    return (
      <div className="card margin-top-15">
        <h5><span  id="username"> </span> <small>(you)</small></h5>
        <div className="message-display">
          <p id="server-message">{
            this.state.title.message
            || this.state.description.message
          }</p>
          <div className="loader-xs" id="post-question-loader"></div>
        </div>
        <form className="question-form" onSubmit={this.postQuestionHandler}>
          <input 
            type="text"
            name="question-input"
            value={this.state.title.content}
            placeholder="What is your question?"
            id="title" 
            onChange={this.changeHandler} />
          <textarea
          placeholder="Description"
          value= {this.state.description.content}
          id="description" 
          onChange={this.changeHandler}></textarea>
          <div className="btn-group">
            <button type="submit" className="btn primary question-btn" id="send-btn">Ask Question</button>
            <input type="reset" value="Cancel" />
          </div>
        </form>
      </div>
    );
  }
}

QuestionForm.propTypes = {
  postQuestion: PropTypes.func.isRequired,
  question: PropTypes.object,
};

export default connect(null, { postQuestion })(QuestionForm);
