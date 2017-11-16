import React from 'react';
import ReactDOM from 'react-dom';
import GeneralContainer from './components/dashboard/Dashboard';
import BookDetailContainer from './components/book-detail/bookDetailContainer';
import AuthRoute from './components/authentication/authRoute.js';
import PrivateRoute from './components/authentication/privateRoute.js';
import LoginContainer from './components/login/login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  	<Switch>
  	  <PrivateRoute exact path='/' component={GeneralContainer} />
  	  <AuthRoute exact path='/login' component={LoginContainer} />
  	  <PrivateRoute exact path='/dashboard' component={GeneralContainer} />
  	  <PrivateRoute exact path='/books/:id' component={BookDetailContainer} />
  	</Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
