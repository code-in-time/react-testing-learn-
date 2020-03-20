import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './Reducers'
import reduxPromise from 'redux-promise'

const store = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(
      reduxPromise
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default ({children, initialState = {}}) => (
  <Provider store={store(initialState)}>
    {children}
  </Provider>
);
