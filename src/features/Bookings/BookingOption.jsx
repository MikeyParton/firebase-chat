import React from 'react'
import withResource from 'shared/withResource'
import ConversationOption from 'features/Conversations/ConversationOption'
import { BookingOptionWrapper } from './styled'
import { setCurrentBooking } from './bookingsActions'

const BookingOption = (props) => {
  const { id, name, conversations, setCurrentBooking } = props
  return (
    <BookingOptionWrapper>
      <div onClick={() => setCurrentBooking(id)} >
        Booking) {name}
      </div>
      <ul>
        {conversations.map(id => (
          <ConversationOption id={id} />
        ))}
      </ul>
    </BookingOptionWrapper>
  )
}

export default withResource('bookings', BookingOption, {
  setCurrentBooking
})
