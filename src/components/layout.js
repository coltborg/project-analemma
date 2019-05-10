/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
// import './layout.css'
import '../styles/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/coltborg"
          >
            Twitter
          </a>{' '}
          /{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/coltborg/"
          >
            Instagram
          </a>{' '}
          /{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/coltborg"
          >
            Github
          </a>{' '}
          /{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/coltborg/"
          >
            CodePen
          </a>
          <div>© {new Date().getFullYear()}</div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
