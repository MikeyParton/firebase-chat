import { createReducer} from 'utils/reducerUtils'
import { SET_CURRENT_CONVERSATION } from '../conversationsConstants'
import { SET_CURRENT_BOOKING } from 'features/Bookings/bookingsConstants'

export default createReducer(null, {
  [SET_CURRENT_CONVERSATION]: (state, payload) => payload.id,
  [SET_CURRENT_BOOKING]: (state, payload) => null
})
