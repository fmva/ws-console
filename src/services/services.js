import axios from 'axios';
import * as Cookies from 'js-cookie';
import { settings } from '../settings';

const API_URL = 'https://work.vint-x.net/api';
const TOKEN = 'x-test-app-jwt-token';

export const signIn = ({ username, password }) => axios.post(`${API_URL}/login`, { username, password });

export const subscribe = () =>
  axios.get(`${API_URL}/subscribe`, { headers: { [TOKEN]: Cookies.get(settings.authCookieName) } });
