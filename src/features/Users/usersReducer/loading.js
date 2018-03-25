import createReducer from 'utils/createReducer'
import { USERS_LOADED } from '../usersConstants'

export default createReducer(true, {
  [USERS_LOADED]: () => false
})
