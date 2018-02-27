// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/app.compoment';
import reducers from './reducers';

import type {Store} from "./types";
import thunk from "redux-thunk";

const store: Store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const element = document.getElementById('root');
if (!element) {
    throw new Error("couldn't find element with id root")
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    element
);

registerServiceWorker();
