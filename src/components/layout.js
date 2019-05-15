/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import Header from './header'
import SEO from './seo'
// import './layout.css'
import '../styles/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            titleInitials
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO lang="en" htmlClassNames="font-iAWriter bg-green" />
        <SkipNavLink />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteTitleInitials={data.site.siteMetadata.titleInitials}
        />
        <SkipNavContent />
        <main style={{ border: '3px dotted goldenrod' }}>{children}</main>
        <footer style={{ border: '3px dotted salmon' }}>
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
