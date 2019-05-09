import React from 'react'
import Proptypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { edges: articles } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        {articles.map(({ node: article }) => (
          <li key={article.id}>
            <Link to={article.frontmatter.slug}>
              {article.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: Proptypes.object,
}

export const pageQuery = graphql`
  query articleIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
