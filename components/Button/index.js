import React, { Children } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export const buttonStyles = css`
    color: ${props => props.active ? props.theme.color.neutral[1] : props.theme.color.neutral[5]};
    font-family: ${props => props.theme.typo.font.primary.normal};
    font-weight: 600;
    font-size: 0.75em;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    user-select: none;
    line-height: 40px;
    margin-top: 1px;
    display: block;
    background-color: rgba(0,0,0,0.0);
    :hover {
      opacity: 0.7;
    }
    transition: background-color, opacity 0.15s ease;
    ${props => props.tab && withTab};
    ${props => props.border &&  'padding: 0 1.5em'};
`

const withBorder = css`
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0.25em;
    :hover {
        background-color: rgba(0,0,0,0.02);
    }
`

const withTab = css`
    margin: 0 1em;
    ${props => props.active && 'box-shadow: 0 2px #4080FF'};
`

const Anchor = styled.a`
    ${buttonStyles};
`

const IconAnchor = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  z-index: 10;
  cursor: pointer;
  background: url('/static/icons/${props => props.icon}.svg') no-repeat center;
  ${props => props.border && withBorder};
  opacity: 0.7;
  transition: background-color, opacity 0.15s ease;
  :hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  display: inline-block;
  ${props => props.border && withBorder};
`

export const Button = ({ href, onClick, handleRoute, active, children, border, tab, icon}) => {
    let button = (
        <Anchor href={href} onClick={onClick} active={active} tab={tab} border={border}>
            {children}
        </Anchor>
    )

    if (handleRoute) {
        button = (
            <Link prefetch href={href} passHref>
                <Anchor active={active}>
                    {children}
                </Anchor>
            </Link>
        )
    }

    if (icon) {
        button = (
            <IconAnchor icon={icon}/>
        )
    }

    return (
        <Wrapper active={active} border={border} tab={tab}>
            {button}
        </Wrapper>
    )
}