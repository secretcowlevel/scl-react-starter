import React from 'react'
import {
    BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './app'
import Home from './containers/home'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/app" component={App} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>, document.getElementById('scl-container')
)

// if (module.hot) {
//     module.hot.accept('./app', () => {
//         const NextApp = require('./app').default; // eslint-disable-line
//
//         ReactDOM.render(
//             <AppContainer>
//                 <NextApp />
//             </AppContainer>, document.getElementById('scl-container'));
//     });
// }
