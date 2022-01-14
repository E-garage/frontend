import axios from "axios";

const url = process.env.REACT_APP_API_URL;

const resetPassword = axios.create({
  baseURL: `${url}/reset-password`
});

export default {
  resetPasswordLink: email => resetPassword.put("/send-link", email),
  resetPassword: values => resetPassword.put("/", values)
};
