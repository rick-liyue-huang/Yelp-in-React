import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {todoApp} from "./reducers";
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middlewares/logger';
import loggerEnhancer from './enhancers/logger';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoApp,  composeEnhancers(
applyMiddleware(thunkMiddleware, loggerMiddleware), loggerEnhancer
));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
