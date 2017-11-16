import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {

  render() {
    const logged = localStorage.getItem('loggedUser') ? true : false
    console.log('this is the user'+localStorage.getItem('loggedUser'))
    console.log('this is the logged var'+logged)
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
