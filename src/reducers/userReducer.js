import { USER } from '../actions/types';

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER:
    return Object.assign({}, state, {
      user: action.data,
    });
  default:
    return state;
  }
};
