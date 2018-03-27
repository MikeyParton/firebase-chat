import styled from 'styled-components'

export const BookingsWrapper = styled.div`
  width: 200px;
  border: 1px solid black;
  margin-right: 20px;
`

export const Header = styled.div`
  padding: 8px;
`

export const BookingOptionWrapper = styled.div`
  ${({active, theme}) => active && `
    color: white;
    background-color: ${theme.colors.header};
  `}
  height: 50px;
  padding: 8px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  cursor: pointer;
`
