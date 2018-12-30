import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Blogs = ({ count }) =>
    <StaticQuery
    query={ query }
    render={ data =>
        data.blogs &&
        data.blogs.edges
        .map(a => a.node)
        .filter((a, i) => !count || i < count)
        .map((blog : Blog, i) =>
            <BlogCard key={ i } { ...blog } />
        )
    }
  />

export default Blogs

interface Blog {
    slug : string
    title : string
    path : string
    subtitle : string
    content : any
    coverImage : {
        fluid? : {
            src : string
        }
    }
}

const query = graphql`
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
                      maxWidth: 500,
                      maxHeight: 300,
                      quality: 100
                    ) {
                        src
                    }
                }
            }
        }
    }
}
`

const BlogCard = ({ title, slug, subtitle, coverImage, content } : Blog) =>
  <Wrapper href={ `/` + slug } tabIndex={0}>
    <img alt={ 'Cover Image for ' + title } src={ coverImage && coverImage.fluid && coverImage.fluid.src }/>
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
