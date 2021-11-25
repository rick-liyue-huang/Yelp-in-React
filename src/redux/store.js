
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules'
import loggerMiddleware from "../todos/middlewares/logger";
import loggerEnhancer from "../todos/enhancers/logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(
  applyMiddleware(thunk, loggerMiddleware), loggerEnhancer
));

export default store;
