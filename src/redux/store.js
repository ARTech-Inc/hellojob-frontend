// import { combineReducers, createStore, applyMiddleware } from "redux";
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { usersReducer } from "./reducer/users";
import thunk from "redux-thunk";

const reducers = combineReducers({
  users: usersReducer,
  // users: userReducer,
});

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
