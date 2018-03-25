import { CHAT_ADDED } from './chatConstants'
import { database } from 'app/firebase'

export const addChat = (userId1, userId2) => (
  (dispatch) => {
    const chat = { users: [userId1, userId2] }
    database.ref('/chats').push(chat)
    .then((snap) => {
      const id = snap.key
      database.ref(`/users/${userId1}/chats/${id}`).set(true)
      database.ref(`/users/${userId2}/chats/${id}`).set(true)
    })
  }
)

export const chatAdded = (chat) => ({
  type: CHAT_ADDED,
  payload: {
    chat
  }
})
