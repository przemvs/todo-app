import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";
import promise from "redux-promise-middleware";
import * as reducers from "./ducks";

const initialState = undefined;

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: "store",
  whitelist: [],
  transforms: [],
  storage
};

// persistCombineReducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware, promise];

const isDevEnvironment = process.env.NODE_ENV === "development";
const enhancer = isDevEnvironment
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

const store = createStore(persistedReducer, initialState, enhancer);

export const persistor = persistStore(store);

export default store;
