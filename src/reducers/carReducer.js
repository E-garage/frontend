import {
  SET_CARS,
  SET_CAR,
  ADD_CAR,
  SET_DETAILS,
  REMOVE_CAR,
} from "../actions/actionTypes";

const initialState = {
  cars: null,
  car: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARS:
      return { ...state, cars: action.payload.cars };
    case SET_CAR:
      return { ...state, car: action.payload.car };
    case ADD_CAR:
      return { ...state, cars: [...state.cars, action.payload.car] };
    case SET_DETAILS:
      return {
        ...state,
        car: { ...state.car, details: action.payload.details },
      };
    case REMOVE_CAR:
      return state.cars.filter(car => car.id !== action.payload.id);
    default:
      return state;
  }
}
