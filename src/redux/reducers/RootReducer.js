import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import user from "./UserReducer";
import cart from "./cart_reducer";
import directory from "./directory_reducer";
import shop from "./collection_reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user,
  cart,
  directory,
  shop,
});

export default persistReducer(persistConfig, rootReducer);
