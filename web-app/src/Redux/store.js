import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleware = [thunk];
const enhancers = [];

// Add middleware to enhancers array
enhancers.push(applyMiddleware(...middleware));

// Add Redux DevTools extension if available
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

// Compose enhancers into a single function
const composedEnhancers = compose(...enhancers);

// Create store with composed enhancers
const store = createStore(reducers, {}, composedEnhancers);

export default store;
