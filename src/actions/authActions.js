import { LOGIN, LOGOUT, SET_USER } from "./actionTypes";

export const login = data => {
  localStorage.setItem("token", data.accessToken);
  return { type: LOGIN, payload: { data } };
};

export const logout = () => {
  localStorage.removeItem("token")
  return { type: LOGOUT }
}

export const setUser = (user) => {
  return { type: SET_USER, payload: { user } }
}