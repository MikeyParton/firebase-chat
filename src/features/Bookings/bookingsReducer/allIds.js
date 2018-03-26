import { createReducer, allIdsLoadKey} from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from '../bookingsConstants'

const loadBookings = allIdsLoadKey('bookings')

export default createReducer([], {
  [BOOKINGS_SUCCESS]: loadBookings
})
