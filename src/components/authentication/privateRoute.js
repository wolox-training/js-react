import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {

  render() {
    const logged = localStorage.getItem('loggedUser')
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
