import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export default {
  register: user => axios.post(`${url}/auth/signup`, user),
  login: user => axios.post(`${url}/auth/login`, user),
  logout: () => axios.post(`${url}/auth/logout`),
};
