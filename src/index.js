import React from 'react';
import ReactDOM from 'react-dom';
import GeneralContainer from './components/dashboard/Dashboard';
import BookDetailContainer from './components/book-detail/bookDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  	<Switch>
  	  <Route exact path='/' component={GeneralContainer}/>
  	  // <Route exact path='/dashboard' component={GeneralContainer}/>
  	  <Route exact path='/books/:id' component={BookDetailContainer}/>
  	</Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
