import React from 'react'
import withResource from 'shared/withResource'
import ConversationOption from 'features/Conversations/ConversationOption'
import { BookingOptionWrapper } from './styled'
import { setCurrentBooking } from './bookingsActions'

const BookingOption = (props) => {
  const { id, active, name, conversations, setCurrentBooking } = props
  return (
    <BookingOptionWrapper
      active={active}
      onClick={() => !active && setCurrentBooking(id)}
    >
      {name}
    </BookingOptionWrapper>
  )
}

export default withResource('bookings', BookingOption, {
  setCurrentBooking
})
