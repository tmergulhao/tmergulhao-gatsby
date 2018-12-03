import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { GatsbyConfig } from './SEO'

const Header = () =>
  <StaticQuery query={ graphql`
  query {
          site {
              siteMetadata {
                  title
                  subtitle
              }
          }
      }
  `} render={ (props : GatsbyConfig) => {

      const {
          title,
          subtitle,
      } = props.site.siteMetadata

      return <Wrapper>
        <div>
          <h1>
            <Link to="/">{ title }</Link>
            <small>{ subtitle }</small>
          </h1>
        </div>
      </Wrapper>
  }}/>

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
