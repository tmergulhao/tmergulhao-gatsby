import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, navigate } from 'gatsby'

const Blogs = () =>
    <StaticQuery
    query={graphql`
    query BlogListingQuery {
        blogs:allContentfulBlog(
            sort: { fields: [ createdAt ] }
        ) {
            edges {
                node {
                    title
                    slug
                    subtitle
                    content {
                        markdown:childMarkdownRemark {
                            excerpt(pruneLength: 140, truncate: false)
                        }
                    }
                    coverImage {
                        title
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
    `}
    render={data =>
        !data.blogs ? null :
        data.blogs.edges
        .map(a => a.node)
        .map(({
            slug,
            ...rest
        }, i) =>
        <Blog
            key={ i }
            path={ '/' + slug }
            { ...rest }
        />)
    }
  />

export default Blogs

const Blog = ({ title, path, subtitle, coverImage, content }) =>
  <Wrapper onClick={ () => navigate('/' + path) } role="link" tabIndex={0}>
    <h3 className='accent'>{ title }</h3>
    <p><strong>{ subtitle }</strong><br/>{ content.markdown.excerpt }</p>
  </Wrapper>


const Wrapper = styled.div`
    margin-top: 1rem;
`
