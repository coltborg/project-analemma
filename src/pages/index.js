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
    allQuotesJson: { edges: quotes },
  },
  data: {
    allSpeakingListJson: { edges: speakingList },
  },
}) => (
  <Layout applyGrid>
    <SEO
      title="Home"
      keywords={[
        'Colt Borg',
        'web development',
        'web design',
        'frontend development',
        'vuejs',
      ]}
    />
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
          {speakingList.map(({ node: { title }, node: { url } }) => (
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
    {quotes.length > 0 && (
      <>
        <h2 className="my-6 text-xl md:text-2xl lg:text-3xl font-bold leading-tight ">
          From Other People
        </h2>
        <ul>
          {quotes.map(
            ({
              node: { id },
              node: { person },
              node: { quote },
              node: { url },
            }) => (
              <li key={id} className="mb-2">
                <blockquote className="p-4 bg-neutral-100 text-neutral-600 border-l-4 border-neutral-500 italic quote">
                  <p className="mb-2">"{quote}"</p>
                  <cite>
                    -{' '}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {person}
                    </a>
                  </cite>
                </blockquote>
              </li>
            )
          )}
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
    allQuotesJson {
      edges {
        node {
          id
          person
          quote
          url
        }
      }
    }
    allSpeakingListJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          url
        }
      }
    }
  }
`

export default IndexPage
