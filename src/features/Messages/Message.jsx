import React from 'react'
import withResource from 'shared/withResource'
import { OuterMsgWrapper, MsgWrapper } from './styled'
import { FlexDaddy } from 'shared/styled'

const Message = ({ text, userId, currentUser }) => {
  const isMine = userId == currentUser
  return (
    <OuterMsgWrapper>
      <FlexDaddy justifyEnd={isMine}>
        <MsgWrapper isMine={isMine}>
          <div>{text}</div>
        </MsgWrapper>
      </FlexDaddy>
    </OuterMsgWrapper>
  )
}

export default withResource('messages', Message)
