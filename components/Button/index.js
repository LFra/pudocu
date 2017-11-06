import React, { Children } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export const buttonStyles = css`
    font-family: ${props => props.theme.typo.font.primary.semiBold};
    font-size: 0.75em;
    letter-spacing: 1.5px;
    color: ${props => props.active ? props.theme.color.neutral[1] : props.theme.color.neutral[5]};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    user-select: none;
    line-height: 3em;
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

const Wrapper = styled.div`
  display: inline-block;
  ${props => props.border && withBorder};
`

export const Button = ({ href, onClick, handleRoute, active, children, border, tab}) => {
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

    return (
        <Wrapper active={active} border={border} tab={tab}>
            {button}
        </Wrapper>
    )
}