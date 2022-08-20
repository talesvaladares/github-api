import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/users/talesvaladares'
});

export default api;