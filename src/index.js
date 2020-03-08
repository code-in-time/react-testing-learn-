import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import store from './Reducers'

import App from './components/App'


ReactDom.render(
  <Provider store={createStore(store, {})}><App/></Provider>
  , document.getElementById('root')
)