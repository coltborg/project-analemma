import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteTitleInitials }) => (
  <header className="border-t-4 border-gray-900">
    <nav>
      <ul className="mx-2 md:mx-3 text-lg md:text-xl hd flex items-center">
        <li className="flex-grow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl hd:text-5xl">
            <Link to="/">
              <span className="visually-hidden sm:visually-hidden-reset">
                {siteTitle}
              </span>
              <span aria-hidden="true" className="sm:hidden">
                {siteTitleInitials}
              </span>
            </Link>
          </h1>
        </li>
        <li className="mr-4">
          <Link to="/uses">Uses</Link>
        </li>
        <li>
          <button type="button">Dark</button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteTitleInitials: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteTitleInitials: ``,
}

export default Header
