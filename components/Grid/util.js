import { breakpoints } from '../../lib/theme/breakpoints'
import { grid } from '../../lib/theme/grid'
import { css } from 'styled-components'

// iterate through the sizes and create a media template
export const media = (breakpoints = breakpoints) => Object.keys(breakpoints).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = breakpoints[label].width / 16
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)}
        }
    `
    return accumulator
}, {})

/**
 * Generate the columns for the fluid layout.
 * Pass 'grid' as a prop generate a subgrid of the given node.
 * Pass 'translate' as a prop with an array as value to translate. You can also
 * pass 'center' as a value to automaticly center the element.
 *
 * @param {Array} arr
 * @param {Object} props
 * @return {String}
 */

export const fluid = ({ center = false, fluid}) => Object.keys(breakpoints).reduce((accumulator, label, index) => {
    const emSize = breakpoints[label].width / 16
    let gridColumn
    let gridTranslate = 1

     if (center) {
        gridTranslate = Math.ceil((grid.columns - fluid[index]) / 2) + 1
    }

    // Default value. That is all sizes bigger than 1260px.
    if (index === 0) return {
        gridColumn: `${gridTranslate} / span ${fluid[0]}`
    }

    if (typeof fluid[index] === 'number') {
        gridColumn = `${gridTranslate} / span ${fluid[index]}`
    } else {
        gridColumn = `${gridTranslate} / span ${grid.columns}`
    }

    accumulator[`@media (max-width: ${emSize}em)`] = {
        gridColumn
    }
    return accumulator
}, {})
