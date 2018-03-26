import React from 'react'
import { connect } from 'react-redux'
import User from './User'
import { loadUsers } from './usersActions'
import { Paddington, FlexDaddy } from 'shared/styled'
import { getUsers } from './usersSelectors'

const mapState = (state) => ({
  users: getUsers(state)
})

const actions = { loadUsers }

class Users extends React.Component {
  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    const { users } = this.props
    return (
      <Paddington px={8} py={8}>
        <FlexDaddy>
          {users.map(user => (
            <User {...user }/>
          ))}
        </FlexDaddy>
      </Paddington>
    )
  }
}

export default connect(mapState, actions)(Users)
