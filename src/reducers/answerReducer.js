import {
  NEW_ANSWER, FETCH_QUESTION, ACCEPT_ANSWER, VOTE_ANSWER, NEW_COMMENT
} from '../actions/types';

const initialState = {
  answer: {},
  answers: [],
  accepted: null,
  voted: null,
  comment: {},
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
  case VOTE_ANSWER:
    return Object.assign({}, state, {
      voted: action.data,
    });
  case NEW_COMMENT:
    return Object.assign({}, state, {
      comment: action.data,
    });
  default:
    return state;
  }
};
