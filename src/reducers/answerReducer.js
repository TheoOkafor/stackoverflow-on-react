import { NEW_ANSWER, FETCH_QUESTION } from '../actions/types';

const initialState = {
  answer: {},
  answers: [],
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
    default:
      return state;
  }
}