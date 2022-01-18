import {
  SET_REFUELINGS,
  ADD_REFUELING,
  UPDATE_REFUELING,
  REMOVE_REFUELING
} from "./actionTypes";

export const setRefuelings = refueling => {
  return { type: SET_REFUELINGS, payload: { refueling } };
};

export const addRefueling = refueling => {
  return { type: ADD_REFUELING, payload: { refueling } };
};

export const updateRefueling = refueling => {
  return { type: UPDATE_REFUELING, payload: { refueling } };
};

export const removeRefueling = id => {
  return { type: REMOVE_REFUELING, payload: { id } };
};
