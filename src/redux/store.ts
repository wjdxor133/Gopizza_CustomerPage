import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const middlewars = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewars));

export const persistor = persistStore(store);

export default { store, persistor };
