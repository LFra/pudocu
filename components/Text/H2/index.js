import styled from 'styled-components'

const H2 = styled.div`
  font-family: ${props => props.theme.typo.font.primary.normal};
  font-weight: 300;
  color: ${props => props.theme.color.neutral[1]};
  font-size: 1.5em;
  line-height: 1em;
  display: block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export default H2
