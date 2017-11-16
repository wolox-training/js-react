import React, { Component } from 'react';
import Button from './button';
import { Redirect } from 'react-router-dom'

class Logout extends Component {

  state = {redirect: false}
  logout = () => {
    localStorage.removeItem('loggedUser')
    this.setState({redirect:true})
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/login'/>
    }

    return (
      <Button text='Logout' onClick={this.logout}/>
    )
  }
}

export default Logout;
