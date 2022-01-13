import axios from "axios";

const url = process.env.REACT_APP_API_URL;

const auth = axios.create({
  baseURL: `${url}/auth`,
});

export default {
  register: user => auth.post("/signup", user),
  login: user => auth.post("/login", user),
  logout: () => auth.post("/logout"),
  getUser: () => auth.get("/users/1"),
};
