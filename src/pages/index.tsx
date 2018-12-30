import React from 'react'
import Rehype from 'rehype-react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Project from '../components/Project'
import Header from '../components/header'
import Blogs from '../components/Blogs'
import Layout from '../components/layout'
import SEO from '../components/SEO'

interface HomePage {
  data : {
    page : {
      content : {
        markdown : {
          htmlAst : any
        }
      }
    }
  }
}

const IndexPage = (home : HomePage) =>
  <>
    <SEO/>
    <Header/>
    <Layout>{ renderer(home.data.page.content.markdown.htmlAst) }</Layout>
  </>

export default IndexPage

export const query = graphql`{
  page:contentfulPage(path: { eq: "index" }) {
    content {
      markdown:childMarkdownRemark {
        htmlAst
      }
    }
  }
}`

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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media screen and (min-width: 30rem) {
    grid-template-columns: 1fr 1fr;
    
  }
`

export const renderer = new Rehype({
	createElement: React.createElement,
	components: {
        'twocolumn': TwoColumnWrapper,
        'blogs': Blogs,
        'iconlist': IconizedList,
        'project': Project,
	}
}).Compiler
