import createReducer from 'utils/createReducer'
import { CHAT_ADDED } from '../chatConstants'

export default createReducer({}, {
  [CHAT_ADDED]: (state, payload) => payload.chat
})
