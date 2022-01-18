import axios from "axios";

const url = process.env.REACT_APP_API_URL + '/insurance';

export default {
  getInsuranceDate: carId => axios.get(`${url}/${carId}`),
  updateInsuranceDate: (carId, date) => axios.get(`${url}/${carId}/update`, { end_date: date }),
  deleteInsuranceDate: (carId) => axios.get(`${url}/delete`, carId),
}