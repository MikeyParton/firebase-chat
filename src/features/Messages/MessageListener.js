import React from 'react'
import { connect } from 'react-redux'
import { database } from 'app/firebase'
import { loadMessage } from './messagesActions'

const actions = {
  loadMessage
}

class MessageListener extends React.Component {
  state = {
    listener: null
  }

  componentDidMount() {
    const { id, loadMessage } = this.props
    const listener = database.ref(`/conversations/${id}/messages`)
      .limitToLast(1).on('child_added', (snapshot) => {
        loadMessage({
          id: snapshot.key,
          ...snapshot.val()
        })
      })
    this.setState({ listener })
  }

  componentwillUnmount() {
    this.state.listener.off()
  }

  render() {
    return null
  }
}

export default connect(null, actions)(MessageListener)
