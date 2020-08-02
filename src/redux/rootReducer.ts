import { combineReducers } from "redux";

import cartReducer from "./cart/cartReducer";

export default combineReducers({
  cart: cartReducer,
});
