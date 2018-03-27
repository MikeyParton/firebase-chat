import React from 'react'
import { connect } from 'react-redux'
import { requestBookings } from './bookingsActions'
import { getBookingIds } from './bookingsSelectors'
import BookingOption from './BookingOption'
import { BookingsWrapper } from './styled'

const mapState = state => ({
  bookingIds:  getBookingIds(state),
  currentUser: state.auth.currentUser
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
    const { bookingIds } = this.props
    return (
      <BookingsWrapper>
        <h3>Bookings</h3>
        { bookingIds.map(id => <BookingOption id={id} />) }
      </BookingsWrapper>
    )
  }
}

export default connect(mapState, actions)(Bookings)
