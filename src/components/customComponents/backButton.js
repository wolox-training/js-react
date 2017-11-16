import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import Logout from './logout';
import Button from './button';

class BackButton extends Component {
  render() {
    return (
      <div>
        <Link to={'/dashboard'}>&lt;Volver</Link>
        <Logout/>
      </div>
    )
  }
}

export default BackButton;
