import { breakpoints } from './breakpoints'
import { color } from './color'
import { grid } from './grid'
import { typo } from './typo'
import { ThemeProvider } from 'styled-components'

export const theme = {
    breakpoints,
    color,
    grid,
    typo
}

export const WithThemeStory = (storyFunction) => (
    <ThemeProvider theme={theme}>
        {storyFunction()}
    </ThemeProvider>
)

const WithTheme = WrappedComponent => {
    return (props) =>
        <ThemeProvider theme={theme}>
            <WrappedComponent {...props}/>
        </ThemeProvider>
}

export default WithTheme