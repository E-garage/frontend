import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import carsReducer from "./reducers/carsReducer"
import cardsReducer from "./reducers/cardsReducer"

const reducer = combineReducers({ authReducer, carsReducer, cardsReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
