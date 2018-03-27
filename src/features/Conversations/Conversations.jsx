import React from 'react'
import { connect } from 'react-redux'
import ConversationOption from './ConversationOption'
import { ConversationsWrapper } from './styled'
import { getConversationIdsForBooking } from 'features/Bookings/bookingsSelectors'

const mapState = state => ({
  conversationIds:  getConversationIdsForBooking(state),
})

const actions = {}

class Conversations extends React.Component {
  render() {
    const { conversationIds } = this.props
    return (
      <ConversationsWrapper>
        <h3>Conversations</h3>
        { conversationIds.map(id => <ConversationOption id={id} />) }
      </ConversationsWrapper>
    )
  }
}

export default connect(mapState, actions)(Conversations)
