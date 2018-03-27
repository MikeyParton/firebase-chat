import React from 'react'
import { connect } from 'react-redux'
import { loggedIn, loggedOut } from 'features/Auth/authActions'
import Messages from 'features/Messages/Messages'
import MessageListeners from 'features/Messages/MessageListeners'
import Users from 'features/Users/Users'
import Bookings from 'features/Bookings/Bookings'
import Conversations from 'features/Conversations/Conversations'
import { Nav, PageWrapper, Content, InnerContent } from './styled'

const mapState = (state) => ({
  currentUser: state.auth.currentUser,
  currentBooking: state.bookings.current,
  currentConversation: state.conversations.current
})

const actions = {
  loggedIn,
  loggedOut
}

class Page extends React.Component {
  render() {
    const {
      currentUser,
      currentBooking,
      currentConversation
    } = this.props

    return (
      <PageWrapper>
        <Nav>Test Chat App</Nav>
        <Content>
          <Users />
          <InnerContent>
            {currentUser && <MessageListeners />}
            {currentConversation && (
              <Messages
                currentConversation={currentConversation}
                currentUser={currentUser}
              />
            )}
            {currentUser && <Bookings />}
            {currentBooking && <Conversations />}
          </InnerContent>
        </Content>
      </PageWrapper>
    )
  }
}

export default connect(mapState, actions)(Page)
