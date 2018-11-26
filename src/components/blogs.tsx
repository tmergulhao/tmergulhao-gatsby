import React from 'react'
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
                    content {
                        markdown:childMarkdownRemark {
                            excerpt(pruneLength: 140, truncate: false)
                        }
                    }
                }
            }
        }
    }
    `}
    render={({ blogs }) => blogs.edges
        .map(a => a.node)
        .map(({
            slug,
            title,
            content: {
                markdown: {
                    excerpt
                }
            }
        }, i) =>
        <Blog
            key={ i }
            path={ '/' + slug }
            title={ title }
            excerpt={ excerpt }
        />)
    }
  />

export default Blogs

const Blog = ({ title, path, excerpt }) =>
  <div onClick={ () => navigate('/' + path) } role="link" tabIndex={0}>
    <h3 className='accent'>{ title }</h3>
    <p>{ excerpt }</p>
  </div>
