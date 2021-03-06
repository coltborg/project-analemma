import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle, siteTitleInitials }) => (
  <header className="px-4 md:mb-6 border-t-4 border-primary-400">
    <nav>
      <ul className="text-lg md:text-xl hd flex items-baseline">
        <li className="flex-grow">
          <h1 className="text-3xl lg:text-4xl hd:text-5xl">
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
