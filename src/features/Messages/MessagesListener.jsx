import React from 'react'
import { database } from 'app/firebase'
import { connect } from 'react-redux'

const mapState = (state) => ({})

const actions = {}

class MessagesListener extends React.Component {
  componentDidMount() {
    const { chatId } = this.props

    // Start listening to new messages in the chat
    database
      .ref(`/messages/${chatId}`)
      .limitToLast(1)
      .on('child_added', (snapshot) => {
        // Do something with the message
      })


  }

  render() {
    return null
  }
}

export default connect(mapState, actions)(MessagesListener)
