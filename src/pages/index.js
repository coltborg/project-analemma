import React from 'react'
import Proptypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { edges: articles } = data.allMdx
  return (
    <Layout applyGrid>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        {articles.map(({ node: article }) => (
          <li
            key={article.id}
            className="mb-2 rounded bg-gray-200 flex flex-col hover:bg-green-300"
          >
            <Link to={article.frontmatter.slug} className="p-2">
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
