import { createReducer, byIdLoadKey } from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from 'features/Bookings/bookingsConstants'

const loadConversations = byIdLoadKey('conversations')

export default createReducer({}, {
  [BOOKINGS_SUCCESS]: loadConversations
})
