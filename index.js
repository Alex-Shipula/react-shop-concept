import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducer ({
    heroes: heroesReducer,
    order: orderReducer,
    auth: authReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

