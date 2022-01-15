import { SET_CARS, SET_CAR, ADD_CAR, REMOVE_CAR } from '../actions/actionTypes'

const initialState = {
  cars: null,
  car: null,
}

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_CARS:
      return { ...state, cars: action.payload.cars }
    case SET_CAR:
      return { ...state, car: action.payload.car }
    case ADD_CAR:
      return { ...state, cars: [...state.cars, action.payload.car] }
    case REMOVE_CAR:
      return state
    default:
      return state
  }
}