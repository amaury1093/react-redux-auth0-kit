import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      /**
       * Conditionally add the Redux DevTools extension enhancer
       * if it is installed.
       */
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )

  )
}
