import { SET_CURRENT_CONVERSATION } from './conversationsConstants'

export const setCurrentConversation = (id) => ({
  type: SET_CURRENT_CONVERSATION,
  payload: {
    id
  }
})
