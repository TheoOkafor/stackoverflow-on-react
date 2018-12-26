import { NEW_ANSWER } from './types';

const postAnswer = (data, questionId) => (dispatch) => {
  const token = localStorage.getItem('x-access-token');
  return fetch(
    `https://stackoverflow-by-theo1.herokuapp.com/v1/questions/${questionId}/answers`, {
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

export default postAnswer;
