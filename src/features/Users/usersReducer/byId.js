import { createReducer, byIdLoadKey } from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from 'features/Bookings/bookingsConstants'
import { USERS_LOADED } from '../usersConstants'

const loadUsers = byIdLoadKey('users')

export default createReducer({}, {
  [BOOKINGS_SUCCESS]: loadUsers,
  [USERS_LOADED]: loadUsers
})
