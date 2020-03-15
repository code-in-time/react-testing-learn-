import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './Reducers'


export const store = (initialState) => createStore(
  reducers,
  // {},
  // (props?.initialState ? props.initialState : {}),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default ({children, initialState ={}}) => (
  <Provider store={store(initialState)}>
    {children}
  </Provider>
);
