export const getUsers = state => {
  const { users } = state
  return users.allIds.map(id => users.byId[id])
}
