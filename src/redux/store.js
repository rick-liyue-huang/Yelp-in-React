
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules'
import loggerMiddleware from "../todos/middlewares/logger";
import loggerEnhancer from "../todos/enhancers/logger";
import {todoApp} from "../todos/reducers";
import thunkMiddleware from "redux-thunk";

let store;
if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(todoApp,  composeEnhancers(
    applyMiddleware(thunkMiddleware, loggerMiddleware), loggerEnhancer
  ));
}
else {
  store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
}

export default store;
