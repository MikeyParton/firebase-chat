import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const Nav = styled.div`
  height: 50px;
  color: ${props => props.theme.colors.headerText};
  background-color: ${props => props.theme.colors.header};
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: center;
`
