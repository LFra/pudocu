import styled from 'styled-components'

const H1 = styled.div`
  font-family: ${props => props.theme.typo.font.primary.normal};
  font-weight: 300;
  letter-spacing: -1px;
  color: ${props => props.theme.color.neutral[1]};
  margin: 1em 0 0.5em 0;
  font-size: 2.5em;
  line-height: 1em;
  display: block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export default H1
