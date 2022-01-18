import axios from "axios";
import { getToken } from "../getToken";

const url = process.env.REACT_APP_API_URL + "/family-sharing";

export default {
  getAllFamilies: () =>
    axios.get(`${url}`, { headers: { Authorization: `Bearer ${getToken()}` } }),
  getFamily: id =>
    axios.get(`${url}/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    }),
  addFamily: card => axios.post(`${url}/create`, card),
  updateFamily: (id, card) => axios.put(`${url}/update/${id}`, card),
  deleteFamily: id => axios.delete(`${url}/delete/${id}`),
  addMember: (id, member) => axios.put(`${url}/update/${id}/members`, member),
  deleteMember: (id, member) => axios.put(`${url}/${id}/members`, member),
  addCarToFamily: id => axios.put(`${url}/${id}/cars`),
};
