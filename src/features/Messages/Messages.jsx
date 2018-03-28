import React from 'react'
import { connect } from 'react-redux'
import { database } from 'app/firebase'
import { FlexDaddy, FlexBoy } from 'shared/styled'
import Message from './Message'
import { loadMessages } from './messagesActions'

import {
  ISend,
  IClose
} from 'shared/Icons'

import {
  Wrapper,
  MsgWrapper,
  Header,
  Footer,
  MessageWindow,
  MsgInput
} from './styled'

import { getMessageIdsForCurrentConversation } from './messagesSelectors'

const mapState = (state) => ({
  messageIds: getMessageIdsForCurrentConversation(state)
})

const actions = {
  loadMessages
}

class Chat extends React.Component {
  state = {
    open: true,
    value: ''
  }

  componentDidMount() {
    const { currentConversation, loadMessages } = this.props
    database.ref(`/conversations/${currentConversation}/messages`)
      .limitToLast(10).once('value', (snapshot) => {
        let messages = snapshot.val()
        if (!messages) return
        Object.keys(messages).forEach(key => messages[key].id = key)
        loadMessages(messages)
    })
  }

  handleSubmit = (event) => {
    const { currentConversation } = this.props
    event.preventDefault()

    const message = {
      text: this.state.value,
      userId: this.props.currentUser,
      conversation: currentConversation
    }

    database.ref(`/conversations/${currentConversation}/messages`).push(message)
    this.setState({ value: '' })
  }

  open = () => {
    this.setState({ open: true })
  }

  close = () => {
    this.setState({ open: false })
  }

  handleUpdate = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value, messages, open } = this.state
    const { currentUser, messageIds = [] } = this.props

    if (!currentUser) return null

    return (
      <Wrapper>
        <Header>
          <FlexBoy onClick={this.open} grow={1}>
            Chat
          </FlexBoy>
          { open && (
              <FlexBoy shrink={0} onClick={this.close}>
                <IClose />
              </FlexBoy>
          )}
        </Header>
        {open && (
          <MessageWindow>
            {messageIds.map(msgId => (
              <Message
                id={msgId}
                currentUser={currentUser}
              />
            ))}
          </MessageWindow>
        )}
        {open && (
          <Footer>
            <FlexBoy grow={1}>
            <form onSubmit={this.handleSubmit}>
              <MsgInput autoComplete="off" onChange={this.handleUpdate} name="value" value={value}/>
            </form>
            </FlexBoy>
            <FlexBoy shrink={0}>
              <ISend onClick={this.handleSubmit} />
            </FlexBoy>
          </Footer>
        )}
      </Wrapper>
    )
  }
}

export default connect(mapState, actions)(Chat)
