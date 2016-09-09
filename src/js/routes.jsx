import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './components/root.jsx';
import Main from './components/Main.jsx';

export default(
    <Route path="/" component={Root}>
        <IndexRoute component={Main} />
    </Route>
);
