import { combineReducers, createStore } from "redux";

import { operationsReducer } from "../src/reducer/MessReducer";

const reducer = combineReducers({
  operationsReducer,
});

const store = createStore(reducer);

export default store;
