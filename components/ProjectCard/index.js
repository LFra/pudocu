import react, { Component } from 'react'
import styled from 'styled-components'
import { H2, Caption } from '../Text'
import { Button } from '../Button'


const Wrapper = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  padding: 0 32px;
  position: relative;
  justify-content: space-between;
  transition: all 0.3s ease;
  :hover {
    background: white;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.07);
    > ${BottomBorder} {
      opacity: 0;
    }
  }
`

const BottomBorder = styled.div`
  height: 1px;
  width: calc(100% - 64px);
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.color.neutral[8]};
`

const NameWrapper = styled.div`
  cursor: pointer;
  user-select: none;
`

const CaptionWrapper = styled.div`
  margin-top: 4px;
`

const IconWrapper = styled.div`
  float: right;
  margin-right: -8px;
  & > * {
    margin-left: 8px;
  }
`

export default class ProjectCard extends Component{

    handleTrigger = () => {
        console.log('triggered')
    }

    handleDelete = () => {
        console.log('deleted')
    }

    handleEdit = () => {
        console.log('edited')
    }

    render () {
        return (
            <Wrapper>
                <NameWrapper onClick={this.handleTrigger}>
                    <H2> Project Card </H2>
                    <CaptionWrapper>
                        <Caption inLine> Last edited on </Caption>
                        <Caption bold inLine> 24 December </Caption>
                    </CaptionWrapper>
                </NameWrapper>
                <IconWrapper>
                    <Button onClick={this.handleDelete} icon={'Delete'} />
                    <Button onClick={this.handleEdit} icon={'Edit'} />
                </IconWrapper>
                <BottomBorder />
            </Wrapper>
        )
    }
}

