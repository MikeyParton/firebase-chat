import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
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

export const InnerContent = styled.div`
  flex-grow: 1;
  margin 8px;
  display: flex;
`
