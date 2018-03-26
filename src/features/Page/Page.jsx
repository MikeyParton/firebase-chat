import React from 'react'
import { connect } from 'react-redux'
import { loggedIn, loggedOut } from 'features/Auth/authActions'
import Chat from 'features/Chat/Chat'
import ChatsListener from 'features/Chat/ChatsListener'
import Users from 'features/Users/Users'
import Bookings from 'features/Bookings/Bookings'
import { Nav, PageWrapper, Content } from './styled'

const mapState = (state) => ({
  currentUser: state.auth.currentUser
})

const actions = {
  loggedIn,
  loggedOut
}

class Page extends React.Component {
  render() {
    const { currentUser } = this.props

    return (
      <PageWrapper>
        <Nav>Test Chat App</Nav>
        <Content>
          <Users />
          {currentUser && <Chat currentUser={currentUser} />}
          {currentUser && <Bookings />}
          {currentUser && <ChatsListener currentUser={currentUser} />}
        </Content>
      </PageWrapper>
    )
  }
}

export default connect(mapState, actions)(Page)
