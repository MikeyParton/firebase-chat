import { createReducer, allIdsLoadKey } from 'utils/reducerUtils'
import { MESSAGES_SUCCESS } from '../messagesConstants'

const loadMessages = allIdsLoadKey('messages')

export default createReducer([], {
  [MESSAGES_SUCCESS]: loadMessages
})
