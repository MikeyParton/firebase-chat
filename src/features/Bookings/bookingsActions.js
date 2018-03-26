import { normalize } from 'normalizr'
import { BOOKINGS_REQUEST, BOOKINGS_SUCCESS } from './bookingsConstants'
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

const bookingsRequest = () => ({
  type: BOOKINGS_REQUEST
})

const bookingsSuccess = (entities) => ({
  type: BOOKINGS_SUCCESS,
  payload: { ...entities }
})
