import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {

  render() {
    const logged = localStorage.getItem('loggedUser') ? true : false
    return (
      <Route render={props => (
        logged ? React.createElement(
          this.props.component,
          {...this.props}
        ) : (
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
