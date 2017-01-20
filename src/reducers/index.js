import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import metageIndex from './metage/index'
import metageForm from './metage/form'

export default combineReducers({
  metageIndex,
  metageForm,
  routing: routerReducer
})
