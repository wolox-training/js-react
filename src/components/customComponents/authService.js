import ApiInstance from './apiInstance';
import axios from 'axios';

const AuthService = {
  setToken: (token) => {
    axios.defaults.headers.common.Authorization = token
  },
  login: (email, password) => {
    return ApiInstance.post('users/sessions', {email, password})
  }
};

export default AuthService