import React from 'react'
import Rehype from 'rehype-react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Prism from 'prismjs'

import SEO from '../components/SEO'
import Header from '../components/SmallHeader'
import Layout from '../components/layout'
import Blogs from '../components/Blogs'

import 'prismjs/themes/prism.css'

import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-coffeescript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-ruby'

// import SearchEngineOptimization from './SearchEngineOptimization'

const renderAst = new Rehype({
	createElement: React.createElement,
	components: {
        // 'dropboxvideo': DropboxVideo,
        // 'sectionimage': SectionImage
	}
}).Compiler

class Blog extends React.PureComponent {

    componentDidMount () {
        Prism.highlightAll()
    }

    render () {

        const {
            blog,
        } = this.props.data

        const {
            title,
            subtitle,
            content : {
                markdown : {
                    htmlAst
                }
            }
        } = blog

        return <>
        <SEO
            title={ 'tmergulhao — ' + title }
            description={ subtitle }
        />
        <Header/>
        <Layout>
            <Content>
                <h1>
                    { title }
                    <small>{ subtitle }</small>
                </h1>
                {/* <h2 className='accent'>{  }</h2> */}
                { renderAst(htmlAst) }
            </Content>
            <h2>Other blogs</h2>
            <TwoColumnWrapper>
            <Blogs count={ 2 }/>
            </TwoColumnWrapper>
        </Layout>
        </>
    }
}
  
export default Blog

export const query = graphql`
fragment BlogFragment on ContentfulBlog {
    title
    subtitle
    content {
        markdown:childMarkdownRemark {
            htmlAst
        }
    }
}
query blogQuery($slug: String!){
    blog:contentfulBlog(slug : { eq : $slug }) {
        ...BlogFragment
    }
}
`

const Content = styled.div`
  max-width: 700px;
  color: ${props => props.theme.black};
  font-size: 20px;
  line-height: 140%;

  img, video {
    margin: 30px 0 20px;
    width: 100%;
    border-radius: 14px;
    box-sizing: border-box;
    overflow: hidden;
  }

  h2 {
    padding: 20px 0 0;
    font-size: 32px;
    line-height: 120%;
  }

  h3 {
    padding: 20px 0 0;
    font-size: 24px;
    text-transform: uppercase;
    color: #8E8E93;
    font-weight: 500;
  }

  p {
    color: ${props => props.theme.sectionPara};
    text-align: left;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${props => props.theme.sectionLink};
    transition: 0.5s;
    &:hover {
      color: ${props => props.theme.linkHover};
    }
  }
`

const TwoColumnWrapper = styled.div`
  @media screen and (min-width: 40rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`
