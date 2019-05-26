import React from 'react'
import Proptypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import ListItem from '../components/listItem'
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
        <h2 className="my-6 text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
          Articles
        </h2>
        <ul>
          {articles.map(
            ({
              node: article,
              node: {
                frontmatter: { description },
              },
              node: {
                frontmatter: { emoji },
              },
              node: {
                frontmatter: { slug },
              },
              node: {
                frontmatter: { title },
              },
            }) => (
              <ListItem key={article.id}>
                <Link to={slug} className="p-2 flex items-center">
                  <div
                    className="mr-2 text-2xl hidden sm:block"
                    aria-hidden="true"
                  >
                    {emoji}
                  </div>
                  <div>
                    <div className="text-lg font-bold">{title}</div>
                    <div className="text-sm">{description}</div>
                  </div>
                </Link>
              </ListItem>
            )
          )}
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
            <ListItem key={title}>
              <a
                className="p-2"
                target="_blank"
                rel="noopener noreferrer"
                href={url}
              >
                {title}
              </a>
            </ListItem>
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
            description
            emoji
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
