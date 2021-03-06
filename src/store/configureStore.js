import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

export default (history, initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(routerMiddleware(history), thunkMiddleware)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
