import { createReducer, allIdsLoadKey } from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from 'features/Bookings/bookingsConstants'

const loadBookings = allIdsLoadKey('conversations')

export default createReducer([], {
  [BOOKINGS_SUCCESS]: loadBookings
})
