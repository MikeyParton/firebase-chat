import React from 'react'
import { connect } from 'react-redux'
import MessageListener from './MessageListener'

const mapState = (state) => ({
  conversationIds: state.conversations.allIds
})

const MessageListeners = ({ conversationIds }) => (
  <div>
    {conversationIds.map(id => (
      <MessageListener id={id} />
    ))}
  </div>
)

export default connect(mapState, null)(MessageListeners)
