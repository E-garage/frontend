import {
  SET_CARS,
  SET_CAR,
  ADD_CAR,
  SET_DETAILS,
  REMOVE_CAR,
} from "./actionTypes";

export const setCars = cars => {
  return { type: SET_CARS, payload: { cars } };
};

export const setCar = car => {
  return { type: SET_CAR, payload: { car } };
};

export const setDetails = details => {
  return { type: SET_DETAILS, payload: { details } };
};

export const addCar = car => {
  return { type: ADD_CAR, payload: { car } };
};

export const removeCar = id => {
  return { type: REMOVE_CAR, payload: { id } };
};
