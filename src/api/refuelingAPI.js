import axios from "axios";

const url = process.env.REACT_APP_API_URL + "/refueling";

export default {
  getRefuelings: () => axios.get(`${url}/`),
  addRefueling: refueling => axios.post(`${url}/add`, refueling),
  updateRefueling: (id, refueling) =>
    axios.put(`${url}/update/${id}`, refueling),
  deleteRefueling: id => axios.delete(`${url}/delete/${id}`)
};
