import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers/';

const loggerMiddleware = createLogger();
const store = createStore(reducers, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('scl-container'));
