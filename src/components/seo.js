/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, keywords, lang, meta, title }) {
  const {
    site,
    allImageSharp: { edges: images },
  } = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: { id: { eq: "14abd2e0-a2b9-58b0-963c-4af32b722a03" } }
        ) {
          edges {
            node {
              id
              fluid {
                src
              }
            }
          }
        }
        site {
          siteMetadata {
            author
            bodyClasses
            description
            htmlClasses
            title
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  // Idk why, but the netlify build is failing because images is an empty array
  // on the "/eslint-for-vuejs" page build 🤔
  // So have to contionally pull the variable
  let shareImage
  if (images.length > 0) {
    shareImage = images[0].node.fluid
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
        class: site.siteMetadata.htmlClasses,
      }}
      bodyAttributes={{
        class: site.siteMetadata.bodyClasses,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: shareImage && shareImage.src,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: shareImage && shareImage.src,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: shareImage && shareImage.src,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
