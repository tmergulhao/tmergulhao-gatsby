const path = require('path')
const Blog = path.resolve('src/templates/blog.js')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	
	return new Promise((resolve, reject) => {

		const blogsQuery = graphql(`{
            blogs:allContentfulBlog(sort: { fields: [ createdAt ] }) {
                edges {
                    node { slug }
                }
            }
        }`)

		resolve(
			blogsQuery.then(({ data, errors }) => {
				if (errors) { reject(errors) }
                
                const blogs = data && data.blogs

                if (!blogs) return

                blogs.edges
                .map(a => a.node)
                .map(a => a.slug)
                .forEach(slug => {
                    createPage({
                        path: `${ slug }`,
                        component: Blog,
                        context: {
                            slug,
                        },
                    })
                })
			})
		)
	})
}
