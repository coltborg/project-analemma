/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import Hightlight, { defaultProps } from 'prism-react-renderer'

// TODO: temp component, get rid of!
const components = {
  // TODO: Maybe I don't need to define wrapper anymore? Could have been fixed by Gatsby team
  wrapper: ({ children }) => <>{children}</>,
  h1: ({ children, ...rest }) => (
    <h1 style={{ color: '#e20071' }} {...rest}>
      {children}
    </h1>
  ),
  pre: ({ children }) => {
    const displayCode = children.props.children.trim()
    const langClassName = children.props.className || ''
    const matches = langClassName.match(/language-(?<lang>.*)/)
    const applyLang =
      matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : ''

    return (
      <Hightlight {...defaultProps} code={displayCode} language={applyLang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Hightlight>
    )
  },
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.symbol,
}

components.wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

components.h1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

components.pre.propTypes = {
  children: PropTypes.object,
}

components.wrapper.displayName = 'mdx-wrapper'
components.h1.displayName = 'mdx-h1'
components.pre.displayName = 'mdx-pre'
