import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './layout'
import SEO from './seo'
import { H1 } from './designSystem'

const articleLayout = ({
  data: {
    mdx: {
      code: { body },
    },
  },
  // data: {
  //   mdx: {
  //     frontmatter: { categories },
  //   },
  // },
  data: {
    mdx: {
      frontmatter: { date },
    },
  },
  data: {
    mdx: {
      frontmatter: { description },
    },
  },
  data: {
    mdx: {
      frontmatter: { emoji },
    },
  },
  data: {
    mdx: {
      frontmatter: { keywords },
    },
  },
  data: {
    mdx: {
      frontmatter: { title },
    },
  },
}) => (
  <Layout>
    <SEO title={title} keywords={keywords} description={description} />
    <header className="grid">
      <div className="flex items-baseline">
        <span
          aria-hidden="true"
          className="mr-2 sm:text-2xl md:text-3xl lg:text-4xl hidden sm:block"
        >
          {emoji}
        </span>
        <div>
          <H1 style={{ marginBottom: '4px' }}>{title}</H1>
          <span className="text-sm">{date}</span>
        </div>
      </div>
      {/* <span>Categories</span>
        <ul className="mb-2 text-xs flex flex-wrap">
          {categories.map(category => (
            <li className="p-1 mr-1 rounded" key={category}>
              {category}
            </li>
          ))}
        </ul> */}
    </header>
    <article className="mb-12 grid article">
      <MDXRenderer>{body}</MDXRenderer>
    </article>
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
        categories
        date(formatString: "MMMM DD, YYYY")
        description
        emoji
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
