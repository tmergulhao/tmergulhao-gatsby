import React from 'react'
import Rehype from 'rehype-react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Header from '../components/header'
import Blogs from '../components/blogs'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const ProjectWrapper = styled.a`
  position: relative;
  & > * {
    margin-left: 80px;
  }
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    margin-left: 0;
  }
  h3 {
    color: #1EAED6;
  }
  p:first-child {
    margin-bottom: 0;
  }
`

const Project = ({ children, href }) =>
  <ProjectWrapper href={ href }>
    { children }
  </ProjectWrapper>

const IconizedList = styled.div`
  ul > li > img {
    margin-bottom: -2px;
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
  li > a {
    color: inherit;
  }
`

const TwoColumnWrapper = styled.div`
  @media screen and (min-width: 40rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`

const renderAst = new Rehype({
	createElement: React.createElement,
	components: {
        'twocolumn': TwoColumnWrapper,
        'blogs': Blogs,
        'iconlist': IconizedList,
        'project': Project,
	}
}).Compiler

const IndexPage = ({
  data: {
    page: {
      content: {
        markdown: {
          htmlAst
        }
      }
    }
  }
}) =>
  <>
    <SEO/>
    <Header/>
    <Layout>{ renderAst(htmlAst) }</Layout>
  </>

export const query = graphql`{
  page:contentfulPage(path: { eq: "index" }) {
    content {
      markdown:childMarkdownRemark {
        htmlAst
      }
    }
  }
  site {
    siteMetadata {
        title
        subtitle
        description
        keywords
        twitterHandle
    }
  }
}`

export default IndexPage
