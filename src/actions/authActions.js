import { SIGN_UP, SIGN_IN } from './types';

export const signup = data => (dispatch) => {
  return fetch('https://stackoverflow-by-theo1.herokuapp.com/v1/auth/signup', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return dispatch({
        type: SIGN_UP,
        data: result,
      });
    });
};

export const signin = data => (dispatch) => {
  return fetch('https://stackoverflow-by-theo1.herokuapp.com/v1/auth/signin', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return dispatch({
        type: SIGN_IN,
        data: result,
      });
    });
};
