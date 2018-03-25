import React from 'react'
import { login, logout } from 'features/Auth/authActions'
import { addChat } from 'features/Chat/chatActions'
import { UserWrapper } from './styled'
import { connect } from 'react-redux'

const mapState = (state) => ({
  currentUser: state.auth.currentUser
})

const actions = {
  login,
  logout,
  addChat
}

const User = ({
  id,
  addChat,
  logout,
  currentUser,
  name,
  business,
  login,
  firebase_token
}) => {
  const loggedIn = currentUser == id
  return (
    <UserWrapper>
      <b>{name}</b>
      {business && <span>{business.name}</span>}
      {!currentUser && (
        <button onClick={() => login(firebase_token)}>
          Login
        </button>
      )}

      {/* When the user is logged in */}
      {loggedIn && <span>(Logged In)</span>}
      {loggedIn && (
        <button onClick={() => logout()}>
          Logout
        </button>
      )}

      {/* When the user is available for chat */}
      {!loggedIn && (
        <button onClick={() => addChat(currentUser, id)}>
          New Chat
        </button>
      )}
    </UserWrapper>
  )
}

export default connect(mapState, actions)(User)
