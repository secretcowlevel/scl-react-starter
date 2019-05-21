import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/'
const configureStore = preloadedState => {
  //
  let store = null
  if (process.env.NODE_ENV === 'production') {
    store = createStore(
      rootReducer,
      preloadedState,
      compose(
        applyMiddleware(createLogger())
      )
    )
  } else {
    store = createStore(
      rootReducer,
      preloadedState,
      compose(
        applyMiddleware(createLogger()),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )
  }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
