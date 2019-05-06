import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './layout'

const articleLayout = ({ data: { mdx } }) => (
  <Layout frontmatter={mdx.frontmatter}>
    <header style={{ border: '3px dotted purple' }}>
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.date}</h2>
      <h3>Categories</h3>
      <ul>
        {mdx.frontmatter.categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <h3>Keywords</h3>
      <ul>
        {mdx.frontmatter.keywords.map(keyword => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
    </header>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </Layout>
)

articleLayout.propTypes = {
  data: PropTypes.object,
}

export default articleLayout

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        categories
        keywords
      }
      code {
        body
      }
    }
  }
`
