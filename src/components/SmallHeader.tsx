import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Wrapper } from './header'

const Header = () =>
  <Wrapper>
    <Smaller>
      <h1 style={{ fontSize: '2em' }}>
        <Link
          to="/"
          style={{
            color: 'hsla(0, 0%, 0%, 0.8)',
            textDecoration: 'none',
          }}
        >mar.<span style={{ color: 'hsl(8, 84%, 58%)' }}>codes</span></Link>
      </h1>
    </Smaller>
  </Wrapper>

export default Header

const Smaller = styled.div`
  padding: 1.45rem 1.0875rem 0em;
  padding-top: 1.45rem !important;
`
