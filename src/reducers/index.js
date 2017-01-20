import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import metage from './metage'

const rootReducer = combineReducers({
  metage,
  routing: routerReducer
})

export default rootReducer
