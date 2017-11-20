import ApiInstance from './apiInstance'


const AuthService = {
  login: (email, password) => {
    return ApiInstance.post('users/sessions', {email, password})
  }
};

export default AuthService