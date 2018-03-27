import { normalize } from 'normalizr'
import { BOOKINGS_REQUEST, BOOKINGS_SUCCESS, SET_CURRENT_BOOKING } from './bookingsConstants'
import { bookingsUrl } from 'app/api'
import { responseSchema } from './bookingsSchema'

export const requestBookings = (userId) => (
  (dispatch) => {
    dispatch(bookingsRequest())
    fetch(bookingsUrl(userId))
      .then(res => res.json())
      .then(res => {
        const { entities } = normalize(res, responseSchema)
        dispatch(bookingsSuccess(entities))
      })
  }
)

export const setCurrentBooking = (id) => ({
  type: SET_CURRENT_BOOKING,
  payload: {
    id
  }
})

const bookingsRequest = () => ({
  type: BOOKINGS_REQUEST
})

const bookingsSuccess = (entities) => ({
  type: BOOKINGS_SUCCESS,
  payload: { ...entities }
})
