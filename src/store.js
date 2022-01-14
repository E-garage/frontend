import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";

const reducer = combineReducers({ authReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
