import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes.jsx';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    </AppContainer>
    , document.getElementById('scl-container'));
