import { combineReducers } from 'redux';
import questions from './questionReducer';
import answers from './answerReducer';
import user from './authReducer';
import userProfile from './userReducer';

export default combineReducers({
  questions,
  answers,
  user,
  userProfile,
});
