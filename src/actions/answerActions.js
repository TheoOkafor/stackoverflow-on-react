import { NEW_ANSWER, ACCEPT_ANSWER, VOTE_ANSWER } from './types';

export const postAnswer = (data, questionId) => (dispatch) => {
  const token = localStorage.getItem('x-access-token');
  return fetch(
    `https://stackoverflow-by-theo1.herokuapp.com/v1/questions/${
      questionId}/answers`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then(result => dispatch({
      type: NEW_ANSWER,
      data: result.data,
    }));
};

export const acceptAnswer = payload => (dispatch) => {
  const token = localStorage.getItem('x-access-token');
  return fetch(
    `https://stackoverflow-by-theo1.herokuapp.com/v1/questions/${
      payload.questionId}/answers/${payload.answerId}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({
        value: payload.value,
      }),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then(result => dispatch({
      type: ACCEPT_ANSWER,
      data: result,
    }));
};

export const voteAnswer = payload => (dispatch) => {
  const token = localStorage.getItem('x-access-token');
  return fetch(
    `https://stackoverflow-by-theo1.herokuapp.com/v1/questions/${
      payload.questionId}/answers/${payload.answerId}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({
        vote: payload.vote,
      }),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then(result => dispatch({
      type: VOTE_ANSWER,
      data: result,
    }));
};
