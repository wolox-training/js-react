import React from 'react';
import ReactDOM from 'react-dom';
import GeneralContainer from './components/dashboard/Dashboard';
import BookDetailContainer from './components/book-detail/bookDetailContainer';
import AuthRoute from './components/authentication/authRoute.js';
import PrivateRoute from './components/authentication/privateRoute.js';
import LoginContainer from './components/login/login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './components/redux/store/AppStore.js';

ReactDOM.render(
  <BrowserRouter>
		<Provider store={store}>
			<Switch>
				<PrivateRoute exact path='/' component={GeneralContainer} />
				<AuthRoute exact path='/login' component={LoginContainer} />
				<PrivateRoute exact path='/dashboard' component={GeneralContainer} />
				<PrivateRoute exact path='/books/:id' component={BookDetailContainer} />
			</Switch>
		</Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
