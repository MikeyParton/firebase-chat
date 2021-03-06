import React from 'react'
import { login, logout } from 'features/Auth/authActions'
import { UserWrapper } from './styled'
import { connect } from 'react-redux'
import { FlexDaddy, Paddington, Avatar } from 'shared/styled'

const mapState = (state) => ({
  currentUser: state.auth.currentUser
})

const actions = {
  login,
  logout
}

const User = ({
  id,
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
          <Avatar big src={avatar} />
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
        </Paddington>
      </Paddington>
    </UserWrapper>
  )
}

export default connect(mapState, actions)(User)
