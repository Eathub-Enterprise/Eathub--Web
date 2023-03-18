import { applyMiddleware, createStore } from "redux";
import asyncMiddleware from '../Redux/middleware/index';
import reducers from "./reducers/index";

const store = createStore(
  reducers,
//   applyMiddleware(asyncMiddleware),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
