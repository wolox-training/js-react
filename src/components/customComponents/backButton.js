import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import Button from './button';

class BackButton extends Component {
  render() {
    return (
      <Link to={'/dashboard'}>&lt;Volver</Link>
    )
  }
}

export default BackButton;
