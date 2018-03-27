import { createReducer} from 'utils/reducerUtils'
import { SET_CURRENT_BOOKING } from '../bookingsConstants'

export default createReducer(null, {
  [SET_CURRENT_BOOKING]: (state, payload) => payload.id
})
