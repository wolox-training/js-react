import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class AuthRoute extends Component {

  render() {
    const logged = localStorage.getItem('token');
    const Comp = this.props.component;
    return (
      <Route render={props => (
        logged ? (
          <Redirect to={{
            pathname: '/dashboard',
            state: { from: props.location }
          }}/>
        ) : 
          <Comp {...this.props} />
      )}/>
    );
  }
}

export default AuthRoute;
