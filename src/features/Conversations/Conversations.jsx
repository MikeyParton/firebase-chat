import React from 'react'
import { connect } from 'react-redux'
import ConversationOption from './ConversationOption'
import { ConversationsWrapper, Header } from './styled'
import { getConversationIdsForBooking } from 'features/Bookings/bookingsSelectors'

const mapState = state => ({
  conversationIds:  getConversationIdsForBooking(state),
  currentUser: state.auth.currentUser,
  currentConversation: state.conversations.current
})

const actions = {}

class Conversations extends React.Component {
  render() {
    const { currentUser, conversationIds, currentConversation } = this.props
    return (
      <ConversationsWrapper>
        <Header>
          <h3>Conversations</h3>
        </Header>
        { conversationIds.map(id => (
          <ConversationOption
            id={id}
            currentUser={currentUser}
            active={currentConversation == id}
          />
        ))}
      </ConversationsWrapper>
    )
  }
}

export default connect(mapState, actions)(Conversations)
