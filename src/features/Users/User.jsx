import React from 'react'
import { login, logout } from 'features/Auth/authActions'
import { addChat } from 'features/Chat/chatActions'
import { UserWrapper, Avatar } from './styled'
import { connect } from 'react-redux'
import { FlexDaddy, Paddington } from 'shared/styled'

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
  avatar,
  business,
  login,
  firebase_token
}) => {
  const loggedIn = currentUser == id
  return (
    <UserWrapper>
      <Paddington m={15}>
        <FlexDaddy justifyCenter>
          <Avatar src={avatar} />
        </FlexDaddy>
        <Paddington mt={15}>
          <div>{name}</div>
          {business && <div>{business.name}</div>}
          {!currentUser && (
            <button onClick={() => login(firebase_token)}>
              Login
            </button>
          )}

          {/* When the user is logged in */}
          {loggedIn && <div>(Logged In)</div>}
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
        </Paddington>
      </Paddington>
    </UserWrapper>
  )
}

export default connect(mapState, actions)(User)
