import { USER } from './types';

const getUser = url => (dispatch) => {
  return fetch(
    `https://stackoverflow-by-theo1.herokuapp.com/v1${url}`
  )
    .then((response) => {
      return response.json();
    })
    .then(result => dispatch({
      type: USER,
      data: result.data,
    }));
};

export default getUser;
