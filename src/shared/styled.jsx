import styled from 'styled-components'

export const Paddington = styled.div`
  margin-top: ${({mt}) => mt || 0}px;
  margin-right: ${({mr}) => mr || 0}px;
  margin-bottom: ${({mb}) => mb || 0}px;
  margin-left: ${({ml}) => ml || 0}px;
  padding-top: ${({pt, py}) => pt || py || 0}px;
  padding-right: ${({pr, px}) => pr || px || 0}px;
  padding-bottom: ${({pb, py}) => pb || py || 0}px;
  padding-left: ${({pl, px}) => pl || px || 0}px;
`

export const FlexDaddy = styled.div`
  display: flex;
  ${({column}) => column ? `flex-direction: column;` : ''}
  ${({alignCenter}) => alignCenter ? `align-items: center;` : ''}
`

export const FlexBoy = styled.div`
  ${({grow}) => grow ? `flex-grow: ${grow};` : ''}
  ${({shrink}) => shrink ? `flex-shrink: ${shrink};` : ''}
`
