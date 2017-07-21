// ./src/reducers/index.js
import { combineReducers } from 'redux';
import books from './bookReducer';
import planes from './planeReducer';

export default combineReducers({
  books: books,
  planes: planes
  // More reducers if there are
  // can go here
});
