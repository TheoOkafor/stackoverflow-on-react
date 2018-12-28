import { SIGN_UP } from '../actions/types';

const initialState = {
  payload: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SIGN_UP:
    return Object.assign({}, state, {
      payload: action.data,
    });
  default:
    return state;
  }
};
