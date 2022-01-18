import axios from "axios";
import { getToken } from '../getToken'

const url = process.env.REACT_APP_API_URL + '/cars';

export default {
  getAllCars: () => axios.get(`${url}`, { headers: { 'Authorization': `Bearer ${getToken()}` } }),
  changeStatus: (id) => axios.post(`${url}/status/${id}`),
  addCar: car => axios.post(`${url}/add`, car),
  updateCar: (id, car) => axios.put(`/${id}`, car),
  updateDetails: (id, details) => axios.put(`${url}/update/${id}`, details),
  deleteCar: id => axios.delete(`${url}/${id}`),
}

