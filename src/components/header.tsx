import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = () =>
  <Wrapper>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: 'hsla(0, 0%, 0%, 0.8)',
            textDecoration: 'none',
          }}
        >mar.<span style={{ color: 'hsl(8, 84%, 58%)' }}>codes</span></Link>
      </h1>
      <p>Marcos Griselli website and portfolio</p>
    </div>
  </Wrapper>

export default Header

export const Wrapper = styled.div`
  background: transparent;
  & > div {
    margin: 0 auto 0;
    max-width: 670px;
    padding: 1.45rem 1.0875rem 0em;
    padding-top: 6rem;
  }
`
