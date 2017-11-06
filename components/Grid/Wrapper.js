import styled, { css } from 'styled-components'
import React from 'react'

import { breakpoints } from '../../lib/theme/breakpoints'
import { grid } from '../../lib/theme/grid'

/**
 * On drop or paste text.
 *
 * @return {String}
 * @param breakpoints
 * @param def
 */

const mediaProps = (breakpoints, def) => Object.keys(breakpoints).reduce((accumulator, label) => {
        const emSize = breakpoints[label].width / 16
        accumulator[`@media (max-width: ${emSize}em)`] = {
            maxWidth: `${breakpoints[label].max_width}`,
            gridGap: `0px ${breakpoints[label].gutter / 16}em`
        }
        return accumulator
    },
    {
        maxWidth: '85%',
        gridGap: `0px ${def.gutter / 16}em`
    }
)

export const WrapperCss = css`
    ${mediaProps(breakpoints, breakpoints.default)};
    width: ${breakpoints.default.width}px;
    grid-template-columns: repeat(${grid.columns}, 1fr);
    display: grid;
    margin: 0 auto;
`

export const Wrapper = styled.div`
    ${WrapperCss}
`