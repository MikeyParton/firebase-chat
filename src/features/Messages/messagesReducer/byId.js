import { createReducer, byIdLoadKey } from 'utils/reducerUtils'
import { MESSAGES_SUCCESS } from '../messagesConstants'

const loadMessages = byIdLoadKey('messages')

export default createReducer({}, {
  [MESSAGES_SUCCESS]: loadMessages
})
