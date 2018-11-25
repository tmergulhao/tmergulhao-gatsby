import React from 'react'
import { Link } from 'gatsby'

const Header = () =>
  <div
    style={{
      background: 'transparent',
      marginBottom: '1.45rem',
    }}>
    <div
      style={{
        margin: '0 auto 0',
        maxWidth: 670,
        padding: '1.45rem 1.0875rem',
        paddingTop: '6rem',
      }}>
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
  </div>

export default Header
