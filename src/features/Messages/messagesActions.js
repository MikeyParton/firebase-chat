import { MESSAGES_SUCCESS } from './messagesConstants'
import { schema, normalize } from 'normalizr'
const messageSchema = new schema.Entity('messages')
const messagesSchema = [messageSchema]

export const loadMessage = (message) => {
  const { messages } = normalize(message, messageSchema).entities
  return {
    type: MESSAGES_SUCCESS,
    payload: {
      messages
    }
  }
}

export const loadMessages = (msgs) => {
  const { messages } = normalize(msgs, messagesSchema).entities
  return {
    type: MESSAGES_SUCCESS,
    payload: {
      messages
    }
  }
}
