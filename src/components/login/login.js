import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Input from '../customComponents/input';
import Button from '../customComponents/button';
import AuthService from '../customComponents/authService';
import '../../base.css';
import './login.css';

const validations = {
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  password: /^.{7,52}/
}

class LoginContainer extends Component {

  state = {
    email: '',
    emailError: false,
    emailPristine: true,
    password: '',
    passwordError: false,
    passwordPristine: true,
    loginCredentialsError: false,
    loginRequiredError: false,
    loginValidityError: false,
    redirect: false
  }

  handleChange = (key, value) => {
    this.setState({[key]: value});
    this.validate(key, value);
  }

  validate = (key, value) => {
    this.setState({[`${key}Error`]: !validations[key].test(this.state[key]),
    [`${key}Pristine`]: false})
  }

  login = e => {
    e.preventDefault();
    if(this.state.password.length === 0 || this.state.email.length === 0) {
      this.setState({loginRequiredError: true})
    }
    if(this.state.passwordError || this.state.emailError) {
      this.setState({loginValidityError: true})
    }
    if(!this.state.passwordError && !this.state.emailError) {
      AuthService.login(this.state.email, this.state.password)
      .then( (response) => {
        localStorage.setItem('loggedUser', this.state.email);
        this.setState({redirect: true})
      })
      .catch( () => {
        this.setState({loginCredentialsError: true})
      });
    }
  }

  render() {

    if(this.state.redirect) {
      return <Redirect to='/dashboard'/>
    }

    return (
    
      <form className='general-container' onSubmit={this.login}>
        <Input id='email' title='Email' titleClass='input-title desc-2 light-grey' 
          className={`desc-1 grey padding-left-15 login-input margin-top-10 ${this.state.emailError ? 'invalid-input' : ''}`} 
          onChange={this.handleChange}/>
        <span className={`input-error ${(this.state.emailError && this.state.email.length !== 0)? 'show' : ''}`} >El mail debe ser valido</span>
        <span className={`input-error ${(this.state.email.length === 0 && !this.state.emailPristine) ? 'show' : ''}`} >Este campo es requerido</span>
        <Input id='password' title='Password' titleClass='input-title desc-2 light-grey' type='password' 
          className={`desc-1 grey padding-left-15 login-input margin-top-10  ${this.state.passwordError ? 'invalid-input' : ''}`} 
          onChange={this.handleChange}/>
        <span className={`input-error ${(this.state.passwordError && this.state.password.length !== 0) ? 'show' : ''}`} >La contraseña debe tener entre 8 y 52 caracteres</span>
        <span className={`input-error ${(this.state.password.length === 0 && !this.state.passwordPristine) ? 'show' : ''}`} >Este campo es requeridoo</span>
        <Button type='submit' text='Sign In' className='margin-v-15 white send-commnet-button section-title white' />
        <div className={` login-input white credentials-error  ${this.state.loginCredentialsError ? 'show' : ''}`}>Email o contraseña invalidos</div>
      </form>
    );
  }
}

export default LoginContainer;
