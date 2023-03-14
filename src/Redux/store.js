import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookingsReducer from "./bookingsReducer/bookingsReducer";
import logger from "redux-logger";

const store = createStore(
  bookingsReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;