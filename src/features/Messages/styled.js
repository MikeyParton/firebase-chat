import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid ${props => props.theme.colors.border};
`

export const Header = styled.div`
  background-color: ${props => props.theme.colors.header};
  color: ${props => props.theme.colors.headerText};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  height: 30px;
  flex-shrink: 0
  display: flex;
  padding: 0 8px;
  align-items: center;
`

export const MessageWindow = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  padding: 0 8px;
  height: 260px;
  background-color: white;
`

export const Footer = styled.div`
  flex-shrink: 0;
  height: 30px;
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 0 8px;
  display: flex;
  align-items: center;
`

export const MsgWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 30px;
  border-radius: 15px;
  max-width: 230px;


  ${({isMine, theme}) => (
    isMine ? `
      justify-self: flex-end;
      background-color: ${theme.colors.mine};
      `
    : `justify-self: flex-start;
      background-color: ${theme.colors.yours};`
  )}
`

export const OuterMsgWrapper = styled.div`
  margin-bottom: 20px;

  &:first-child {
    margin-top: 20px;
  }

`

export const MsgInput = styled.input`
  width: 100%;
  border-style: none;
  font-size: 14px;
  background-color: white;

  &:focus {
    outline:0;
  }
`
