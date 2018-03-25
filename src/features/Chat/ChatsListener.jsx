import React from 'react'
import { database } from 'app/firebase'
import { connect } from 'react-redux'
import { chatAdded } from './chatActions'

const mapState = (state) => ({
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
    return null
  }
}

export default connect(mapState, actions)(ChatsListener)
