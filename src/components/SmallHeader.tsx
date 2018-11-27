import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Wrapper, StyledLink } from './header'

const Header = () =>
  <Wrapper>
    <Smaller>
      <h1 style={{ fontSize: '2em' }}>
        <StyledLink to="/">
          mar.<span>codes</span>
        </StyledLink>
      </h1>
    </Smaller>
  </Wrapper>

export default Header

const Smaller = styled.div`
  padding: 1.45rem 1.0875rem 0em;
  padding-top: 1.45rem !important;
`
