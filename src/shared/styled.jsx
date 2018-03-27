import styled from 'styled-components'

export const Paddington = styled.div`
  margin-top: ${({mt, my, m}) => mt || my || m || 0}px;
  margin-right: ${({mr, mx, m}) => mr || mx || m || 0}px;
  margin-bottom: ${({mb, my, m}) => mb || my || m || 0}px;
  margin-left: ${({ml, mx, m}) => ml || mx || m || 0}px;
  padding-top: ${({pt, py, p}) => pt || py || p || 0}px;
  padding-right: ${({pr, px, p}) => pr || px || p|| 0}px;
  padding-bottom: ${({pb, py, p}) => pb || py || p|| 0}px;
  padding-left: ${({pl, px, p}) => pl || px || p|| 0}px;
`

export const FlexDaddy = styled.div`
  display: flex;
  ${({column}) => column ? `flex-direction: column;` : ''}
  ${({alignCenter}) => alignCenter ? `align-items: center;` : ''}
  ${({justifyCenter}) => justifyCenter ? `justify-content: center;` : ''}
  ${({justifyEnd}) => justifyEnd ? `justify-content: flex-end;` : ''}
`

export const FlexBoy = styled.div`
  ${({grow}) => grow ? `flex-grow: ${grow};` : ''}
  ${({shrink}) => shrink ? `flex-shrink: ${shrink};` : ''}
`

export const Avatar = styled.div`
  height: 30px;
  width: 30px;
  ${({big}) => big && `
    height: 100px;
    width: 100px;
  `}
  border-radius: 50px;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center 0;
`
