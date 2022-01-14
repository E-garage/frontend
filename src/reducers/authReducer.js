import {
  LOGIN,
  LOGOUT,
  SET_USER,
} from '../actions/actionTypes'

const initialState = {
  token: localStorage.getItem('token'),
  user: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case LOGIN:
      return { ...state, token: action.payload.data.accessToken, user: action.payload.data.user }
    case LOGOUT:
      return { ...state, token: null, user: null }
    case SET_USER:
      return { ...state, user: action.payload.user }
    default:
      return state
  }
}