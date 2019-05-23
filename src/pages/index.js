import React from 'react'
import Proptypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({
  data: {
    allMdx: { edges: articles },
  },
  data: {
    site: {
      siteMetadata: { speakingList },
    },
  },
}) => (
  <Layout applyGrid>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {articles.length > 0 && (
      <>
        <h2 className="my-6 text-xl md:text-2xl lg:text-3xl font-bold leading-tight ">
          Articles
        </h2>
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
      </>
    )}
    {speakingList.length > 0 && (
      <>
        <h2 className="my-6 text-xl md:text-2xl lg:text-3xl font-bold leading-tight ">
          Speaking
        </h2>
        <ul>
          {speakingList.map(({ title, url }) => (
            <li
              key={title}
              className="mb-2 rounded bg-gray-200 flex flex-col hover:bg-green-300"
            >
              <a
                className="p-2"
                target="_blank"
                rel="noopener noreferrer"
                href={url}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </>
    )}
  </Layout>
)

IndexPage.propTypes = {
  data: Proptypes.object,
}

export const pageQuery = graphql`
  query indexPage {
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
    site {
      siteMetadata {
        speakingList {
          title
          url
        }
      }
    }
  }
`

export default IndexPage
