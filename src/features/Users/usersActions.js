import { USERS_LOAD, USERS_LOADED } from './usersConstants'
import { usersUrl } from 'app/api'
import { normalize } from 'normalizr'
import { responseSchema } from './usersSchema'

export const loadUsers = () => (
  (dispatch) => {
    dispatch(usersLoad())
    fetch(usersUrl)
      .then(res => res.json())
      .then(res => {
        const { users } = normalize(res, responseSchema).entities
        dispatch(usersLoaded(users))
      })
  }
)

const usersLoad = () => ({
  type: USERS_LOAD
})

const usersLoaded = (users) => ({
  type: USERS_LOADED,
  payload: { users }
})
