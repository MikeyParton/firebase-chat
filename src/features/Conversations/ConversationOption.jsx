import React from 'react'
import withResource from 'shared/withResource'
import { setCurrentConversation } from './conversationsActions'
import { ConversationOptionWrapper } from './styled'
import UserInfo from './UserInfo'

const ConversationOption = ({
  id,
  users,
  active,
  setCurrentConversation,
  currentUser
}) => {
  const otherUser = users.filter(id => id != currentUser)[0]

  return (
    <ConversationOptionWrapper
      active={active}
      onClick={() => setCurrentConversation(id)}
    >
      <UserInfo id={otherUser} />
    </ConversationOptionWrapper>
  )
}

export default withResource('conversations', ConversationOption, {
  setCurrentConversation
})
