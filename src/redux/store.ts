import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./rootReducer";

const middlewars = [logger];

export const history = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(routerMiddleware(history), ...middlewars))
  );

  return store;
}

// const store = createStore(
//   createRootReducer(history),
//   compose(applyMiddleware(...middlewars, routerMiddleware(history)))
// );

// export default store;
