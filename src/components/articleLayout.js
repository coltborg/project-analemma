import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './layout'
import SEO from './seo'
import { H1 } from './designSystem'

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
      <header className="grid-article">
        <H1>{frontmatter.title}</H1>
        <span className="text-sm">{frontmatter.date}</span>
        {/* <span>Categories</span>
        <ul className="mb-2 text-xs flex flex-wrap">
          {frontmatter.categories.map(category => (
            <li
              className="p-1 mr-1 bg-gray-700 text-gray-200 rounded"
              key={category}
            >
              {category}
            </li>
          ))}
        </ul> */}
      </header>
      <article className="mb-12 grid-article">
        <MDXRenderer>{body}</MDXRenderer>
      </article>
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
