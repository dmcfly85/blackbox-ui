// ./src/routes.js
import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage';
import Book from './components/book/BookPage';
import Plane from './components/plane/PlanePage';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/books" component={Book}></Route>
    <Route path="/planes" component={Plane}></Route>
  </Route>
);
