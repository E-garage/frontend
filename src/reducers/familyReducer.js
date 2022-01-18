import {
  SET_FAMILIES,
  SET_FAMILY,
  ADD_FAMILY,
  REMOVE_FAMILY,
  ADD_FAMILY_CAR,
  REMOVE_FAMILY_CAR,
  EDIT_FAMILY,
  ADD_MEMBER,
  REMOVE_MEMBER,
} from "../actions/actionTypes";

const initialState = {
  families: null,
  family: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FAMILIES:
      return { ...state, families: action.payload.families };
    case SET_FAMILY:
      return { ...state, family: action.payload.family };
    case ADD_FAMILY:
      return { ...state, families: [...state.families, action.payload.family] };
    case REMOVE_FAMILY:
      return {
        ...state,
        families: state.families.filter(
          family => family.id !== action.payload.id
        ),
      };

    case ADD_MEMBER:
      return {
        ...state,
        family: {
          ...state.family,
          members: [...state.family.members, action.payload.member],
        },
      };
    case REMOVE_MEMBER:
      return {
        ...state,
        family: {
          ...state.family,
          members: state.family.members.filter(
            member => member.id !== action.payload.id
          ),
        },
      };
    case EDIT_FAMILY:
      console.log(action.payload);
      return {
        ...state,
        families: state.families.map(family =>
          family.id === action.payload.id
            ? {
                ...family,
                name: action.payload.values.name,
                description: action.payload.values.description,
              }
            : family
        ),
      };
    case ADD_FAMILY_CAR:
      return {
        ...state,
        family: {
          ...state.family,
          cars: [...state.family.cars, action.payload.car],
        },
      };
    case REMOVE_FAMILY_CAR:
      return {
        ...state,
        family: {
          ...state.family,
          cars: state.family.cars.filter(car => car.id !== action.payload.id),
        },
      };
    default:
      return state;
  }
}
