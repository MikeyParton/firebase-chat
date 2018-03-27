import { combineReducers } from 'redux'
import byId from './byId'
import allIds from './allIds'
import current from './current'

export default combineReducers({
  byId,
  allIds,
  current
})
