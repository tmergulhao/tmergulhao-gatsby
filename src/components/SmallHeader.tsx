import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

import { GatsbyConfig } from './SEO'
import { Wrapper } from './header'

const Header = () =>
  <StaticQuery query={ graphql`
  query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `} render={ (props : GatsbyConfig) => {

      const {
          title,
      } = props.site.siteMetadata

      return <Wrapper>
        <Smaller>
          <h1 style={{ fontSize: '2em' }}>
            <Link to="/">{ title }</Link>
          </h1>
        </Smaller>
      </Wrapper>
  }}/>


export default Header

const Smaller = styled.div`
  padding: 1.45rem 0em 0em;
  padding-top: 1.45rem !important;
`
