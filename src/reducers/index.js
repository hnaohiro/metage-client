import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import metage from './metage'

const rootReducer = combineReducers({
  counter,
  metage,
  routing: routerReducer
})

export default rootReducer
