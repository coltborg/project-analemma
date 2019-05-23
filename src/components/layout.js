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
import Footer from './footer'
import SEO from './seo'
import '../styles/styles.css'

const Layout = ({ children, applyGrid }) => (
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
        <SEO lang="en" />
        <SkipNavLink />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteTitleInitials={data.site.siteMetadata.titleInitials}
        />
        <SkipNavContent />
        <main className={`mb-10 ${applyGrid ? 'grid' : ''}`}>{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  applyGrid: PropTypes.bool,
}

Layout.defaultProps = {
  applyGrid: false,
}

export default Layout
