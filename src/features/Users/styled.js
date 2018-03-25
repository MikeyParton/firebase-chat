import styled from 'styled-components'

export const UserWrapper = styled.div`
  border: solid 1px ${props => props.theme.border};
  height: 200px;
  width: 200px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
