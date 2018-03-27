import React from 'react'
import withResource from 'shared/withResource'
import { OuterMsgWrapper, MsgWrapper } from './styled'
import { FlexDaddy } from 'shared/styled'

class Message extends React.Component {
  componentDidMount() {
    this.node && this.node.scrollIntoView()
  }

  render() {
    const { text, userId, currentUser } = this.props
    const isMine = userId == currentUser

    return (
      <OuterMsgWrapper innerRef={(ref) => { this.node = ref }}>
        <FlexDaddy justifyEnd={isMine}>
          <MsgWrapper isMine={isMine}>
            <div>{text}</div>
          </MsgWrapper>
        </FlexDaddy>
      </OuterMsgWrapper>
    )
  }
}

export default withResource('messages', Message)
