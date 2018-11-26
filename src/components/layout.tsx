import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'

const Layout = ({ children }) =>
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site }) => (
      <>
        <Helmet
          title={ site.siteMetadata.title }
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 670,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}>
          { children }
        </div>
      </>
    )}
  />

export default Layout
