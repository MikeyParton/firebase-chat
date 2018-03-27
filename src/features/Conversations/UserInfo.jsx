import React from 'react'
import withResource from 'shared/withResource'
import { Paddington, FlexDaddy, Avatar } from 'shared/styled'

const UserInfo = ({ name, avatar, business = {} }) => {
  const { name: businessName } = business
  const info = [name, businessName].join(' - ')
  return (
    <FlexDaddy alignCenter>
      <Avatar src={avatar} />
      <Paddington ml={8}>
        {info}
      </Paddington>
    </FlexDaddy>
  )
}

export default withResource('users', UserInfo)
