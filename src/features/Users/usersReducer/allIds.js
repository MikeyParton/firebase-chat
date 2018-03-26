import { createReducer, allIdsLoadKey } from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from 'features/Bookings/bookingsConstants'
import { USERS_LOADED } from '../usersConstants'

const loadUsers = allIdsLoadKey('users')

export default createReducer([], {
  [BOOKINGS_SUCCESS]: loadUsers,
  [USERS_LOADED]: loadUsers
})
