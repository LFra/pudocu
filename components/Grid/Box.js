import styled from 'styled-components'
import { fluid } from './util'

export const Box = styled.div`
    ${props => fluid(props)};
`