import React from 'react'
import withResource from 'shared/withResource'

const BookingOption = (props) => {
  const { id, name } = props
  return (
    <div>
      {id} {name}
    </div>
  )
}

export default withResource('bookings', BookingOption)
