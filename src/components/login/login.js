import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Input from '../customComponents/input';
import Button from '../customComponents/button';
import '../../base.css';
import './login.css';

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const passwordRegex = /^.{8,52}/;

class LoginContainer extends Component {

  state = {
    email: '',
    emailError: false,
    emailPristine: true,
    password: '',
    passwordError: false,
    passwordPristine: true,
    loginRequiredError: false,
    loginValidityError: false,
    redirect: false
  }

  handleChange = (key, value) => {
    this.setState({[key]: value});
    this.validate(key, value);
  }

  validate = (key, value) => {
    this.setState({[`${key}Error`]: key === 'email' ? !emailRegex.test(this.state[key]) : !passwordRegex.test(this.state[key]),
    [`${key}Pristine`]: false})
  }

  login = () => {
    if(this.state.password.length === 0 || this.state.email.length === 0) {
      this.setState({loginRequiredError: true})
    }
    if(this.state.passwordError || this.state.emailError) {
      this.setState({loginValidityError: true})
    }
    if(!this.state.passwordError && !this.state.emailError) {
      localStorage.setItem('loggedUser', this.state.username);
      this.setState({redirect: true})
    }
  }

  render() {

    if(this.state.redirect) {
      return <Redirect to='/dashboard'/>
    }

    return (
    
      <form className='general-container'>
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
        <Button type='submit' text='Sign In' className='margin-v-15 white send-commnet-button section-title whit' onClick={this.login}/>
      </form>
    );
  }
}

export default LoginContainer;
