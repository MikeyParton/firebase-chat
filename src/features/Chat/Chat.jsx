import React from 'react'
import { database } from 'app/firebase'

import { FlexDaddy, FlexBoy } from 'shared/styled'

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

class Chat extends React.Component {
  state = {
    open: true,
    value: '',
    messages: []
  }

  componentDidMount() {
    const { messages } = this.state
    database.ref('/messages').on('value', (snapshot) => {
      const payload = snapshot.val()
      if (payload) {
        this.setState({ messages: [...messages, ...Object.values(payload)] })
      }
    })
  }

  handleSubmit = (event) => {
    const message = {
      text: this.state.value,
      userId: this.props.currentUser
    }

    event.preventDefault()
    database.ref('/messages').push(message)
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
    const { currentUser } = this.props

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
            {messages.map(msg => (
              <MsgWrapper isMine={msg.userId === currentUser.uid}>
                <div>{msg.text}</div>
              </MsgWrapper>
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
              <ISend />
            </FlexBoy>
          </Footer>
        )}
      </Wrapper>
    )
  }
}

export default Chat
