import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      border: '3px dotted blue',
    }}
  >
    <nav>
      <ul>
        <li>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </li>
        <li>
          <Link to="/">Uses</Link>
        </li>
        <li>
          <Link to="/">Dark</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
