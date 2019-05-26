import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ children }) => (
  <li className="mb-2 text-neutral-600 hover:text-primary-900 hover:bg-primary-100 border-l-4 border-transparent hover:border-primary-400 flex flex-col trans-color">
    {children}
  </li>
)

ListItem.propTypes = {
  children: PropTypes.object,
}

export default ListItem
