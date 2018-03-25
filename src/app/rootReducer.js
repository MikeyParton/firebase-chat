import { combineReducers } from 'redux'
import auth from 'features/Auth/authReducer'
import users from 'features/Users/usersReducer'
import chats from 'features/Chat/chatsReducer'

export default combineReducers({
  auth,
  users,
  chats
})
