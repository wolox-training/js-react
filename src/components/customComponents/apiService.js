import axios from 'axios';

const ApiInstance = axios.create({
    baseURL:'https://wbooks-api-stage.herokuapp.com/api/v1/'
});


const ApiService = {
  setToken: (token) => {
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = token
  },
  resetToken: () => {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = token
    return true;
  },
  login: (email, password) => {
    return ApiInstance.post('users/sessions', {email, password})
  },
  bookList: () => {
    return ApiInstance.get('/books')
  },
  getBook: (id) => {
    return ApiInstance.get(`/books/${id}`)
  }
};

export default ApiService