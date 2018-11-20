import { FETCH_QUESTIONS, NEW_QUESTION } from '../actions/types';

const initialState = {
  questions: [],
  question: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.data 
      });
    case NEW_QUESTION:
      return Object.assign({}, state, {
        question: action.data 
      });
    default:
      return state;
  }
}
