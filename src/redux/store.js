import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/RootReducer";
import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
