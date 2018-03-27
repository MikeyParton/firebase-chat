import { createReducer, byIdLoadKey } from 'utils/reducerUtils'
import { BOOKINGS_SUCCESS } from 'features/Bookings/bookingsConstants'
import { MESSAGES_SUCCESS } from 'features/Messages/messagesConstants'

const loadConversations = byIdLoadKey('conversations')

const loadMessages = (state, payload) => {
  return Object.values(payload.messages).reduce((accumulator, current) => {

    let oldMessages = accumulator[current.conversation].messages || []

    // Only append message if it hasn't been included yet
    if (!oldMessages.includes(current.id)) {
      accumulator[current.conversation].messages = [
        ...oldMessages,
        current.id
      ]
    }

    return accumulator
  }, {...state})
}

export default createReducer({}, {
  [BOOKINGS_SUCCESS]: loadConversations,
  [MESSAGES_SUCCESS]: loadMessages
})
