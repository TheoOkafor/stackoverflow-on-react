import { FETCH_QUESTIONS, NEW_QUESTION, FETCH_QUESTION } from './types';

export const fetchQuestions = () => (dispatch) => {
  return fetch('https://stackoverflow-by-theo1.herokuapp.com/v1/questions')
    .then(response => response.json())
    .then((result) => {
      const data = result.data.slice(0).reverse();

      return dispatch({
        type: FETCH_QUESTIONS,
        data,
      });
    });
};

export const postQuestion = data => (dispatch) => {
  return fetch('https://stackoverflow-by-theo1.herokuapp.com/v1/questions', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTQyNjUxODg0LCJleHAiOjE1NDMyNTY2ODR9.hAWGp6zgMCO1trTNGWVWEuDuDxQYdwmJOTo8W4eMEF4',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then(result => dispatch({
      type: NEW_QUESTION,
      data: result.data,
    }));
};

export const fetchQuestion = url => (dispatch) => {
  return fetch(`https://stackoverflow-by-theo1.herokuapp.com/v1${url}`)
    .then(response => response.json())
    .then(result => dispatch({
      type: FETCH_QUESTION,
      data: result.data,
    }));
};
