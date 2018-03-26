import { createReducer, byIdLoadKey } from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from '../bookingsConstants'

const loadBookings = byIdLoadKey('bookings')

export default createReducer({}, {
  [BOOKINGS_SUCCESS]: loadBookings
})
