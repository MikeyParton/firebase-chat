import styled from 'styled-components'

export const UserWrapper = styled.div`
  border: solid 1px ${props => props.theme.border};
  height: 200px;
  width: 200px;
  margin-right: 20px;
  text-align: center;
`

export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center 0;
`
