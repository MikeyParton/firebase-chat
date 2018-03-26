import { combineReducers } from 'redux'
import loading from './loading'
import byId from './byId'
import allIds from './allIds'

export default combineReducers({
  loading,
  byId,
  allIds
})
