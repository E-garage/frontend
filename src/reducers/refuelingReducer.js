import {
  SET_REFUELINGS,
  ADD_REFUELING,
  UPDATE_REFUELING,
  REMOVE_REFUELING,
} from "../actions/actionTypes";

const initialState = {
  refuelings: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_REFUELINGS:
      return { refuelings: action.payload.refuelings };
    case ADD_REFUELING:
      return {
        refuelings: [...state.refuelings, action.payload.refueling],
      };
    case UPDATE_REFUELING:
      return {
        refuelings: state.refuelings.map(refueling =>
          refueling.id === action.payload.id
            ? { refueling: action.payload.refueling }
            : refueling
        ),
      };
    case REMOVE_REFUELING:
      return {
        refuelings: state.refuelings.filter(
          refueling => refueling.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}
