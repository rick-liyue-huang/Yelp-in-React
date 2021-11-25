import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {todoApp} from "./todos/reducers";
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './todos/middlewares/logger';
import loggerEnhancer from './todos/enhancers/logger';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoApp,  composeEnhancers(
applyMiddleware(thunkMiddleware, loggerMiddleware), loggerEnhancer
));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
