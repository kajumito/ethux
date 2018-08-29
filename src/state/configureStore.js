import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { reducer as formReducer } from "redux-form";

import * as reducers from "./modules";

const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer
  }),
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
