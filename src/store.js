import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import carsReducer from "./reducers/carsReducer"

const reducer = combineReducers({ authReducer, carsReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
