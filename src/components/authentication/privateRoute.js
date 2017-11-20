import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import ApiService from '../customComponents/apiService';
class PrivateRoute extends Component {

  render() {
    const logged = localStorage.getItem('loggedUser') ? true : false
    const Comp = this.props.component;
    return (
      <Route render={props => (
        logged ? ApiService.resetToken() && <Comp {...this.props} />
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
