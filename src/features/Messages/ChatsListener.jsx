import React from 'react'
import { database } from 'app/firebase'
import { connect } from 'react-redux'
import { chatAdded } from './chatActions'
import MessagesListener from 'features/Messages/MessagesListener'

const mapState = (state) => ({
  chats: [],
  currentUser: state.auth.currentUser
})

const actions = {
  chatAdded
}

class ChatsListener extends React.Component {
  componentDidMount() {
    const { currentUser, chatAdded } = this.props

    // Start listening to new chats that involve the current user
    database
      .ref(`/users/${currentUser}/chats`)
      .limitToLast(1)
      .on('child_added', (snapshot) => {
        // Retrieve the chat
        const chatId = snapshot.key
        database.ref(`chats/${chatId}`).once('value', (snapshot) => {
          const chat = snapshot.val()
          chatAdded(chat)
        })
      })


  }

  render() {
    const { chats } = this.props
    return chats.map((chat) => (
      <MessagesListener chatId={chat.id} />
    ))
  }
}

export default connect(mapState, actions)(ChatsListener)
