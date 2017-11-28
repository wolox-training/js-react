import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../customComponents/authService';

class PrivateRoute extends Component {

  render() {
    const logged = localStorage.getItem('token')
    if(logged) {
      AuthService.setToken(logged);
    }
    const Comp = this.props.component;
    return (
      <Route render={props => (
        logged ? <Comp {...this.props} />
         : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
        )
      )}/>
    );
  }
}

export default PrivateRoute;
