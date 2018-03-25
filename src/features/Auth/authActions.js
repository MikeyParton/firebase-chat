import { auth } from 'app/firebase'
import {
  AUTH_LOADING,
  LOGGED_IN,
  LOGGED_OUT
} from './authConstants'

export const login = (token) => (
  (dispatch) => {
    dispatch(authLoading())
    auth.signInWithCustomToken(token)
      .then((currentUser) => {
        dispatch(loggedIn(currentUser))
      })
  }
)

export const logout = () => (
  (dispatch) => {
    dispatch(authLoading())
    auth.signOut()
      .then((response) => {
        dispatch(loggedOut())
      })
  }
)

export const loggedIn = (currentUser) => ({
  type: LOGGED_IN,
  payload: {
    currentUser
  }
})

export const loggedOut = () => ({
  type: LOGGED_OUT,
})

const authLoading = () => ({
  type: AUTH_LOADING
})
