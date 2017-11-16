import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class AuthRoute extends Component {

  render() {
    const logged = localStorage.getItem('loggedUser') ? true : false
    return (
      <Route render={props => (
        logged ? (
          <Redirect to={{
            pathname: '/dashboard',
            state: { from: props.location }
          }}/>
        ) : 
          React.createElement(
            this.props.component,
            {...this.props}
          )
      )}/>
    );
  }
}

export default AuthRoute;
