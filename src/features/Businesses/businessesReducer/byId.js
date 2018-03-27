import { createReducer, byIdLoadKey } from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from 'features/Bookings/bookingsConstants'

const loadBusinesses = byIdLoadKey('businesses')

export default createReducer({}, {
  [BOOKINGS_SUCCESS]: loadBusinesses
})
