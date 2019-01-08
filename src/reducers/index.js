import { combineReducers } from 'redux';
import questions from './questionReducer';
import answers from './answerReducer';
import user from './authReducer';
import userProfile from './userReducer';
import notifier from './notifierReducer';

export default combineReducers({
  questions,
  answers,
  user,
  userProfile,
  notifier,
});
