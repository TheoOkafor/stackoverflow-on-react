import { NEW_ANSWER } from './types';

export const postAnswer = (data, questionId) => dispatch => {
  return fetch (
    `https://stackoverflow-by-theo1.herokuapp.com/v1/questions/${questionId}/answers`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTQyNjUxODg0LCJleHAiOjE1NDMyNTY2ODR9.hAWGp6zgMCO1trTNGWVWEuDuDxQYdwmJOTo8W4eMEF4',
      },
      body: JSON.stringify(data),
    })
    .then( (response) => {
      return response.json();
    })
    .then( (result) => dispatch({
      type: NEW_ANSWER,
      data: result.data,
    }));
}