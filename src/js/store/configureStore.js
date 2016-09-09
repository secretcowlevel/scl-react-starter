import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools.jsx';

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(thunkMiddleware, router, loggerMiddleware),
  DevTools.instrument(),
  window.devToolsExtension ? window.devToolsExtension() : noop => noop
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers'))); // eslint-disable-line global-require
    }

    return store;
}
