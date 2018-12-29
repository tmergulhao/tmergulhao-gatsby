import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, navigate } from 'gatsby'

const Blogs = ({ count }) =>
    <StaticQuery
    query={graphql`
    query BlogListingQuery {
        blogs:allContentfulBlog(
            sort: {
                fields: [ releaseDate ],
                order: DESC
            }
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
                        fluid(
                          toFormat: JPG,
                          cropFocus: CENTER,
                          resizingBehavior: FILL,
                          maxWidth: 400,
                          maxHeight: 240,
                          quality: 100
                        ) {
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
        .filter((a, i) => !count || i < count)
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
  <Wrapper href={ `${path}` } tabIndex={0}>
    <img src={ coverImage && coverImage.fluid && coverImage.fluid.src }/>
    <h3 className='accent'>{ title }</h3>
    <p><strong>{ subtitle }</strong><br/>{ content.markdown.excerpt }</p>
  </Wrapper>

const Wrapper = styled.a`
    margin-top: 1rem;
    img {
        margin-bottom: 10px;
        border-radius: 14px;
        transition: 0.5s;
    }
    &:hover img {
        transform: scale(1.05,1.05);
        box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, .2);
    }
`
