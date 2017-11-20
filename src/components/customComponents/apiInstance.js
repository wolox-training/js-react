import axios from 'axios';

const ApiInstance = axios.create({
    baseURL:'https://wbooks-api-stage.herokuapp.com/api/v1/'
});

ApiInstance.defaults.headers.common.Authorization = localStorage.getItem('token');

export default ApiInstance;