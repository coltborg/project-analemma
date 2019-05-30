import React from 'react'
import PropTypes from 'prop-types'

const designSystem = () => <div>test</div>

export const H1 = ({ children, className, ...rest }) => (
  <h1
    className={`my-8 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${className ||
      ''}`}
    {...rest}
  >
    {children}
  </h1>
)

H1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
}

export const H2 = ({ children, className, ...rest }) => (
  <h2
    className={`my-6 text-xl md:text-2xl font-bold leading-tight ${className ||
      ''}`}
    {...rest}
  >
    {children}
  </h2>
)

H2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
}

export const H3 = ({ children, className, ...rest }) => (
  <h3
    className={`my-4 text-lg md:text-xl font-bold leading-tight ${className ||
      ''}`}
    {...rest}
  >
    {children}
  </h3>
)

H3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
}

export const P = ({ children, className, ...rest }) => (
  <p className={`mb-8 text-neutral-600 ${className || ''}`} {...rest}>
    {children}
  </p>
)

P.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  className: PropTypes.string,
}

export const UL = ({ children, className, ...rest }) => (
  <ul
    className={`ml-4 mb-8 list-disc list-outside ${className || ''}`}
    {...rest}
  >
    {children}
  </ul>
)

UL.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  className: PropTypes.string,
}

export const CODE = ({ children, className, ...rest }) => (
  <code className={`bg-gray-600 ${className || ''}`} {...rest}>
    {children}
  </code>
)

CODE.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
}

export default designSystem
