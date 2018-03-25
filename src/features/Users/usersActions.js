import { USERS_LOAD, USERS_LOADED } from './usersConstants'
import { usersUrl } from 'app/api'

export const loadUsers = () => (
  (dispatch) => {
    dispatch(usersLoad())
    fetch(usersUrl)
      .then(res => res.json())
      .then(res => {
        dispatch(usersLoaded(res))
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
