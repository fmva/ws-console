import axios from 'axios';

const API_URL = 'https://work.vint-x.net/api';

export const signIn = (login, password) => {
  return axios.post(`${API_URL}/login`, { password, username: login });
};
