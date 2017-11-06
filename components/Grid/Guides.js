import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { WrapperCss } from './Wrapper'
import { grid } from '../../lib/theme/grid'
import { theme } from '../../lib/theme'

console.log(theme)

const GuideColumn = styled.div`
    opacity: 1;
    height: 100vh;
    background: rgba(200,0,255,0.02);
    border: 1px solid rgba(200,0,255,0.1);
    position: relative;
    grid: span 12;
`

const GuideRow = styled.div`
    ${props => props.background && css`background: rgba(200,0,255,0.05);`};
    ${props => props.border && css`border-bottom: 0.5px solid rgba(200,0,255,0.08);`};
    opacity: 1;
    width: 100%;
    box-sizing: border-box;
    height: ${props => props.height}em;
    margin: 0 0 ${props => props.height}em 0;
    position: relative;
`

const Fixed = styled.div`
    ${WrapperCss};
    position: fixed;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    pointer-events: none;
    background: rgba(0,0,0,0.01)
`

const RowFixed = styled.div`
    position: fixed;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    pointer-events: none;
`

export class Guides extends Component {
    state = {
        showGuides: false
    }

    shouldComponentUpdate (nextProps, nextState) {
        return false
    }

    render () {

        const Repeat = (props) => {
            let items = []
            for (let i = 0; i < props.numTimes; i++) {
                items.push(props.children(i))
            }
            return <props.component>{items}</props.component>
        }

        return (
            <div ref={e => this.element = e} style={{opacity: 1}}>
                <Repeat numTimes={grid.columns} component={Fixed}>
                    {(index) => <GuideColumn key={index}> </GuideColumn>}
                </Repeat>
                <Repeat numTimes={42} component={RowFixed}>
                    {(index) => <GuideRow key={index} height={1} background> </GuideRow>}
                </Repeat>
                <Repeat numTimes={80} component={RowFixed}>
                    {(index) => <GuideRow key={index} height={0.5} border> </GuideRow>}
                </Repeat>
            </div>
        )
    }
}
