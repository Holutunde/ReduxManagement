import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducers from '../reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

export default store
