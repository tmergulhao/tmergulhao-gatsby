import React from 'react'
import styled, { css } from 'styled-components'

const Project = ({ children, href, hasborder }) =>
  <Wrapper href={ href } hasBorder={ hasborder }>
    { children }
  </Wrapper>

export default Project

const Wrapper = styled.a`
  position: relative;
  & > * {
    margin-left: 80px;
  }
  & > p > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    margin-left: 0;
    border-radius: 14px;
    ${ props => props.hasBorder && css`
      border: 1px solid rgba(200, 200, 200, .2);
    `}
  }
  h3 {
    color: #1EAED6;
  }
  p:first-child {
    margin-bottom: 0;
  }
`
