import React from 'react';
import Card from '../components/main/Card';
import { Link } from "react-router-dom";

import { FETCH_QUESTIONS, NEW_QUESTION } from './types';

export const fetchQuestions = () => dispatch => {
  fetch('https://stackoverflow-by-theo1.herokuapp.com/v1/questions')
    .then(response => response.json())
    .then(result => {
      // Reverse the array before mapping {Credit: AdamCooper86 - StackOverflow}
      let data = result.data.slice(0).reverse();

      // creates an div element called card and maps the questions to it.
      let questions = data.map( question => {
        let answer = '';
        let time = '';
        let username = '';
        let answersUserid = '';
        let currAnswers = question.answers;
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
        <Card  key={question.id}>
          <div>
            <h3 className="qs-title">
              <Link to= {`/questions/${question.id}`} 
              className="question">{question.title}</Link></h3>
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
      });
      return dispatch({
        type: FETCH_QUESTIONS,
        data: questions,
      });
    });
}

export const postQuestion = (data) => dispatch => {
  fetch (`https://stackoverflow-by-theo1.herokuapp.com/v1/questions`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTQyNjUxODg0LCJleHAiOjE1NDMyNTY2ODR9.hAWGp6zgMCO1trTNGWVWEuDuDxQYdwmJOTo8W4eMEF4',
      }),
      body: JSON.stringify(data),
    })
    .then( (response) => {
      return response.json();
    })
    .then( (result) => dispatch({
      type: NEW_QUESTION,
      data: result,
    }));
}
