import {combineReducers} from 'redux';
import commentsReducer from './comments';

export default () => ({
  comments: commentsReducer
});