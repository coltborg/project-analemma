import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './layout'
import SEO from './seo'

const articleLayout = ({ data: { mdx } }) => {
  const { frontmatter } = mdx
  const {
    code: { body },
  } = mdx
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={frontmatter.keywords}
        description={frontmatter.description}
      />
      <header style={{ border: '3px dotted purple' }}>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <h3>Categories</h3>
        <ul>
          {frontmatter.categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        <h3>Keywords</h3>
        <ul>
          {frontmatter.keywords.map(keyword => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </header>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

articleLayout.propTypes = {
  data: PropTypes.object,
}

export default articleLayout

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        categories
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
        slug
        title
      }
      code {
        body
      }
    }
  }
`
