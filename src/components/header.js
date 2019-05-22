import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteTitleInitials }) => (
  <header className="px-1 mb-12 border-t-4 border-gray-900">
    <nav>
      <ul className="text-lg md:text-xl hd flex items-center">
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
        <li className="">
          <Link
            to="/uses"
            className="flex items-center text-green-900 underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 sm:w-4 mr-1 icon-code"
              width="16"
              height="16"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                className="icon-primary"
                rx="2"
              />
              <path
                className="icon-secondary"
                d="M8.7 13.3a1 1 0 0 1-1.4 1.4l-2-2a1 1 0 0 1 0-1.4l2-2a1 1 0 1 1 1.4 1.4L7.42 12l1.3 1.3zm6.6 0l1.29-1.3-1.3-1.3a1 1 0 1 1 1.42-1.4l2 2a1 1 0 0 1 0 1.4l-2 2a1 1 0 0 1-1.42-1.4zm-3.32 3.9a1 1 0 0 1-1.96-.4l2-10a1 1 0 0 1 1.96.4l-2 10z"
              />
            </svg>
            <span>Uses</span>
          </Link>
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
