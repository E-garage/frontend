import axios from "axios";
import {getToken} from '../getToken'

const url = process.env.REACT_APP_API_URL;

export default {
  getAllCars: () => axios.get(`${url}/cars`, { headers: { 'Authorization': `Bearer ${getToken()}` } }),
  getOneCar: (id) => axios.get(`${url}/${id}`),
  addCar: car => axios.post(`${url}/cars/add`, car),
  updateCar: (id, car) => axios.put(`/${id}`, car),
  deleteCar: id => axios.delete(`${url}/${id}`),
}

