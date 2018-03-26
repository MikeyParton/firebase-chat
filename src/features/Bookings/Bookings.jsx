import React from 'react'
import { connect } from 'react-redux'
import { requestBookings } from './bookingsActions'
import { getBookingIds } from './bookingsSelectors'
import BookingOption from './BookingOption'

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
      <div>
        <div>Bookings</div>
        { bookingIds.map(id => <BookingOption id={id} />) }
      </div>
    )
  }
}

export default connect(mapState, actions)(Bookings)
