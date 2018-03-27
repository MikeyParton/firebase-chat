import { createReducer, allIdsLoadKey } from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from 'features/Bookings/bookingsConstants'

const loadBusinesses = allIdsLoadKey('businesses')

export default createReducer([], {
  [BOOKINGS_SUCCESS]: loadBusinesses
})
