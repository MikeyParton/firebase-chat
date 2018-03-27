import React from 'react'
import { connect } from 'react-redux'
import { requestBookings } from './bookingsActions'
import { getBookingIds } from './bookingsSelectors'
import BookingOption from './BookingOption'
import { BookingsWrapper, Header } from './styled'

const mapState = state => ({
  bookingIds:  getBookingIds(state),
  currentUser: state.auth.currentUser,
  currentBooking: state.bookings.current
})

const actions = {
  requestBookings
}

class Bookings extends React.Component {
  componentDidMount() {
    const { requestBookings, currentUser } = this.props
    requestBookings(currentUser)
  }

  render() {
    const { bookingIds, currentBooking } = this.props
    return (
      <BookingsWrapper>
        <Header>
          <h3>Bookings</h3>
        </Header>
        { bookingIds.map(id => (
          <BookingOption
            id={id}
            active={currentBooking == id}
          />
        ))}
      </BookingsWrapper>
    )
  }
}

export default connect(mapState, actions)(Bookings)
