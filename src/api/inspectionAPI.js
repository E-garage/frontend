import axios from "axios";

const url = process.env.REACT_APP_API_URL + '/inspection';

export default {
  getInspectionDate: carId => axios.get(`${url}/${carId}`),
  updateInspectionDate: (carId, date) => axios.get(`${url}/${carId}/update`, { end_date: date }),
  deleteInspectionDate: (carId) => axios.get(`${url}/delete`, carId),
}

