import styled from 'styled-components'

const WithCenterWrapper= styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

const WithCenterInside= styled.div`
  display: block;
  position: relative;
`

export const WithCenterStory = (storyFunction) => (
    <WithCenterWrapper>
        <WithCenterInside>
            {storyFunction()}
        </WithCenterInside>
    </WithCenterWrapper>
)