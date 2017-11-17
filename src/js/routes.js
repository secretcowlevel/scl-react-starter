import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './components/root';
import Main from './components/Main';

export default(
    <Route path="/" component={Root}>
        <IndexRoute component={Main} />
    </Route>
);
