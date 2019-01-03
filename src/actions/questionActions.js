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

const token = localStorage.getItem('x-access-token');

export const postQuestion = data => (dispatch) => {
  return fetch('https://stackoverflow-by-theo1.herokuapp.com/v1/questions', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
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
