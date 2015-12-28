import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.jsx';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

let history = createBrowserHistory();
ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('scl-container'));
