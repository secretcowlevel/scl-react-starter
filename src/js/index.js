import React from 'react'

import ReactDOM from 'react-dom'
import App from './app'

import configureStore from './store/configureStore'

configureStore()

ReactDOM.render(<App />, document.getElementById('scl-container'))
