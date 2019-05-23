import { hot } from 'react-hot-loader/root'
import React from 'react'
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom'
// import App from './app'
import Home from './routes/home'
import Profile from './routes/profile'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>
)

export default hot(App)
