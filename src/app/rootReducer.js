import { combineReducers } from 'redux'
import auth from 'features/Auth/authReducer'
import bookings from 'features/Bookings/bookingsReducer'
import users from 'features/Users/usersReducer'
import conversations from 'features/Conversations/conversationsReducer'
import businesses from 'features/Businesses/businessesReducer'

export default combineReducers({
  auth,
  users,
  conversations,
  bookings,
  businesses
})
