import { FETCH_QUESTIONS, NEW_QUESTION, FETCH_QUESTION } from '../actions/types';

const initialState = {
  questions: [],
  question: {},
  questionWithAnswer: {},
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
    case FETCH_QUESTION:
      return Object.assign({}, state, {
        questionWithAnswer: action.data,
      });
    default:
      return state;
  }
}
