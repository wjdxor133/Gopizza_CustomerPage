import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

const createRootReducer = (history) =>
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
