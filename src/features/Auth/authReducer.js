import createReducer from 'utils/createReducer'
import {
  AUTH_LOADING,
  LOGGED_IN,
  LOGGED_OUT
} from './authConstants'

const initialState = {
  currentUser: null,
  loading: false
}

export default createReducer(initialState, {
  [AUTH_LOADING]: (state, payload) => ({ ...state, loading: true }),
  [LOGGED_IN]: (state, payload) => ({ currentUser: payload.currentUser.uid, loading: false }),
  [LOGGED_OUT]: (state, payload) => ({ currentUser: null, loading: false })
})
