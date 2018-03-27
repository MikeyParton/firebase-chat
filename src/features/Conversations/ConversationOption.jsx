import React from 'react'
import withResource from 'shared/withResource'
import { setCurrentConversation } from './conversationsActions'
import { ConversationOptionWrapper } from './styled'

const ConversationOption = ({
  id,
  users,
  active,
  setCurrentConversation
}) => {
  return (
    <ConversationOptionWrapper
      active={active}
      onClick={() => setCurrentConversation(id)}
    >
      Option
    </ConversationOptionWrapper>
  )
}

export default withResource('conversations', ConversationOption, {
  setCurrentConversation
})
