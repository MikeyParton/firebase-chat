import { createReducer } from 'utils/reducerUtils'
import { USERS_LOADED } from '../usersConstants'

export default createReducer(true, {
  [USERS_LOADED]: () => false
})
