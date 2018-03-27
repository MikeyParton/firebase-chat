export const getMessageIdsForCurrentConversation = (state) => {
  const { current, byId } = state.conversations
  return byId[current].messages
}
