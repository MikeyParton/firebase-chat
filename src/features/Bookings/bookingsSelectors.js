export const getBookingIds = state => state.bookings.allIds
export const getBookingById = (id, state) => state.bookings.byId[id]
export const getConversationIdsForBooking = (state) => {
  const { current } = state.bookings
  return state.bookings.byId[current].conversations
}
