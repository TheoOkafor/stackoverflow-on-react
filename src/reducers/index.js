import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';
import authReducer from './authReducer';

export default combineReducers({
  questions: questionReducer,
  answers: answerReducer,
  user: authReducer,
});
