/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import Hightlight, { defaultProps } from 'prism-react-renderer'
import theme from './src/styles/customNightOwl'
import { H1, H2, H3, P, UL } from './src/components/designSystem'

const components = {
  wrapper: ({ children }) => <>{children}</>,
  h1: ({ children, ...rest }) => <H1 {...rest}>{children}</H1>,
  h2: ({ children, ...rest }) => <H2 {...rest}>{children}</H2>,
  h3: ({ children, ...rest }) => <H3 {...rest}>{children}</H3>,
  h4: ({ children, ...rest }) => (
    <h4 style={{ color: 'salmon' }} {...rest}>
      {children}
    </h4>
  ),
  h5: ({ children, ...rest }) => (
    <h5 style={{ color: 'salmon' }} {...rest}>
      {children}
    </h5>
  ),
  h6: ({ children, ...rest }) => (
    <h6 style={{ color: 'salmon' }} {...rest}>
      {children}
    </h6>
  ),
  p: ({ children, ...rest }) => <P {...rest}>{children}</P>,
  ul: ({ children, ...rest }) => <UL {...rest}>{children}</UL>,
  a: ({ children, href, ...rest }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
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
      <Hightlight
        {...defaultProps}
        theme={theme}
        code={displayCode}
        language={applyLang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`p-4 mb-8 lg:rounded text-sm overflow-auto ${className}`}
            style={style}
          >
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

components.h2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

components.h3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

components.h4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

components.h5.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

components.h6.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

components.p.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
}

components.ul.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
}

components.a.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  href: PropTypes.string,
}

components.pre.propTypes = {
  children: PropTypes.object,
}

components.wrapper.displayName = 'mdx-wrapper'
components.h1.displayName = 'mdx-h1'
components.h2.displayName = 'mdx-h2'
components.h3.displayName = 'mdx-h3'
components.h4.displayName = 'mdx-h4'
components.h5.displayName = 'mdx-h5'
components.h6.displayName = 'mdx-h6'
components.p.displayName = 'mdx-p'
components.ul.displayName = 'mdx-ul'
components.a.displayName = 'mdx-a'
components.pre.displayName = 'mdx-pre'
