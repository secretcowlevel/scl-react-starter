import { hot } from 'react-hot-loader/root'
import React from 'react'
// import {
//   BrowserRouter, Route, Switch, Redirect
// } from 'react-router-dom'
// import App from './app'
// import Home from './containers/home'

const App = () => (
  <div>Hello World</div>
)

/*
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={Home} />
    <Redirect from='*' to='/' />
  </Switch>
</BrowserRouter>

*/

export default hot(App)
