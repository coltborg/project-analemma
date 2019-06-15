import React from 'react'
import Proptypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import ListItem from '../components/listItem'
import Quote from '../components/quote'
import SEO from '../components/seo'

const IndexPage = ({
  data: {
    allMdx: { edges: articles },
  },
  data: {
    allProjectsJson: { edges: projects },
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
      title="Colt Borg - Frontend Engineer"
      keywords={[
        'Colt Borg',
        'web development',
        'web design',
        'frontend development',
        'vuejs',
      ]}
    />
    {articles.length > 0 && (
      <section>
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
                <article>
                  <Link
                    aria-label={title}
                    className="p-2 flex items-center"
                    to={slug}
                  >
                    <div
                      aria-hidden="true"
                      className="mr-2 text-2xl hidden sm:block"
                    >
                      {emoji}
                    </div>
                    <header>
                      <h1 className="text-lg font-bold">{title}</h1>
                      <div className="text-sm">{description}</div>
                    </header>
                  </Link>
                </article>
              </ListItem>
            )
          )}
        </ul>
      </section>
    )}
    {speakingList.length > 0 && (
      <section>
        <h2 className="my-6 text-xl md:text-2xl lg:text-3xl font-bold leading-tight ">
          Speaking
        </h2>
        <ul>
          {speakingList.map(({ node: { title }, node: { url } }) => (
            <ListItem key={title}>
              <a
                className="p-2"
                href={url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {title}
              </a>
            </ListItem>
          ))}
        </ul>
      </section>
    )}
    {projects.length > 0 && (
      <section>
        <h2 className="my-6 text-xl md:text-2xl lg:text-3xl font-bold leading-tight ">
          Side Projects
        </h2>
        <ul>
          {projects.map(
            ({
              node: { description },
              node: { emoji },
              node: { id },
              node: { name },
              node: { tools },
              node: { url },
            }) => (
              <ListItem key={id}>
                <article>
                  <a
                    aria-label={name}
                    className="p-2 flex items-center"
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      className="mr-2 text-2xl hidden sm:block"
                      aria-hidden="true"
                    >
                      {emoji}
                    </div>
                    <div>
                      <header>
                        <h1 className="text-lg font-bold">{name}</h1>
                      </header>
                      <div className="text-sm">{description}</div>
                      {tools && (
                        <>
                          <div className="mt-2 text-sm font-bold">Tools</div>
                          <ul className="flex flex-wrap">
                            {tools.map(tool => (
                              <li className="mb-1 px-1 py-0  mr-2 text-xs bg-secondary-50 text-secondary-500 rounded">
                                {tool}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </a>
                </article>
              </ListItem>
            )
          )}
        </ul>
      </section>
    )}
    {quotes.length > 0 && (
      <section>
        <h2 className="my-6 text-xl md:text-2xl lg:text-3xl font-bold leading-tight ">
          From Other People
        </h2>
        <ul>
          {quotes.map(
            ({
              node: { avatar },
              node: { company },
              node: { id },
              node: { person },
              node: { quote },
              node: { url },
            }) => (
              <li key={id} className="mb-8">
                <Quote
                  avatarAlt={`Avatar of ${person}`}
                  avatarUrl={avatar}
                  company={company}
                  linkUrl={url}
                  name={person}
                  quote={quote}
                />
              </li>
            )
          )}
        </ul>
      </section>
    )}
  </Layout>
)

IndexPage.propTypes = {
  data: Proptypes.object,
}

export const pageQuery = graphql`
  query indexPage {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            description
            emoji
            slug
            title
          }
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          description
          emoji
          id
          name
          tools
          url
        }
      }
    }
    allQuotesJson {
      edges {
        node {
          avatar
          company
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
