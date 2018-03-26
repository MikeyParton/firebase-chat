import React from 'react'
import { connect } from 'react-redux'

const capitalize = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
)

const withResource = (key, Component) => {
  const mapState = (state, ownProps) => ({
    ...state[key].byId[ownProps.id]
  })

  const wrappedComponent = props => <Component {...props} />

  return connect(mapState, null)(wrappedComponent)
}

export default withResource
