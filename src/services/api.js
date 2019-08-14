import axios from 'axios';

const API = axios.create({
  baseURL: 'https://my-json-server.typicode.com/markspro/dbreactfy'
});

export default API;