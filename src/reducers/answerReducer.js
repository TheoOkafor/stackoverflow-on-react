import { NEW_ANSWER, FETCH_QUESTION, ACCEPT_ANSWER } from '../actions/types';

const initialState = {
  answer: {},
  answers: [],
  accepted: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case NEW_ANSWER:
    return Object.assign({}, state, {
      answer: action.data
    });
  case FETCH_QUESTION:
    return Object.assign({}, state, {
      answers: action.data.answers,
    });
  case ACCEPT_ANSWER:
    return Object.assign({}, state, {
      accepted: action.data,
    });
  default:
    return state;
  }
};
