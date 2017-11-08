import styled from 'styled-components'

const Caption = styled.span`
  font-family: ${props => props.theme.typo.font.primary.normal};
  font-weight: 300;
  color: ${props => props.theme.color.neutral[6]};
  font-size: 0.85em;
  line-height: 1.25em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${props => props.bold && 'font-weight: 500'};
  ${props => props.italic && 'font-style: italic'};
  ${props => props.inline && 'display: inline'};
  ${props => props.floatLeft && 'float: left'};
`

export default Caption
