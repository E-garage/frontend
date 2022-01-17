import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import carReducer from "./reducers/carReducer"
import familyReducer from "./reducers/familyReducer"

const reducer = combineReducers({ authReducer, carReducer, familyReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
