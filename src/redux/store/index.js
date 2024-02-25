import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import {createBrowserHistory as createHistory} from 'history'
import rootReducers from '../reducers'

export const history = createHistory()

const configureStore = (initialState = {}) => {
  const historyRouterMiddleware = routerMiddleware(history)

  const enhancers = []
  const middleware = [
    thunk,
    historyRouterMiddleware,
  ]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    const {createLogger} = require('redux-logger')
    const loggerMiddleware = createLogger()
    middleware.push(loggerMiddleware)
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  )

  const store = createStore(
    rootReducers,
    initialState,
    composedEnhancers,
  )

  return store

}


export default configureStore
