const path = require('path')

const createArticles = (createPage, edges) => {
  edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/components/articleLayout.js`),
      context: {
        id: node.id,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
    query allMdx {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }
    const { edges } = data.allMdx
    const { createPage } = actions
    createArticles(createPage, edges)
  })
}
