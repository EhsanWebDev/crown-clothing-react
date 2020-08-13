import { combineReducers } from "redux";

import user from "./UserReducer";
import cart from "./cart_reducer";

export default combineReducers({
  user,
  cart,
});
