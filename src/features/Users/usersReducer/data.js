import createReducer from 'utils/createReducer'
import { USERS_LOADED } from '../usersConstants'

export default createReducer([], {
  [USERS_LOADED]: (state, payload) => payload.users
})
