import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { AuthReducer } from "../reducers/AuthReducer";
import thunk from "redux-thunk";
const reducers = combineReducers({
  Auth: AuthReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
