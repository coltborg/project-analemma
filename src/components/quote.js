import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ avatarAlt, avatarUrl, company, linkUrl, name, quote }) => (
  <blockquote className="p-4 bg-neutral-100 text-neutral-600 border-l-4 border-neutral-500 italic relative quote">
    <div className="stylistic-quote-mark" aria-hidden="true">
      &ldquo;
    </div>
    <p className="mb-4">{quote}</p>
    <cite className="flex items-center">
      <img
        alt={avatarAlt}
        className="mr-4 w-12 bg-neutral-500 rounded-full"
        // eslint-disable-next-line import/no-dynamic-require
        src={require(`../images/${avatarUrl}`)}
      />
      <div className="flex flex-col items-start">
        <span className="mb-1 text-sm font-bold italic">{name}</span>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          {company}
        </a>
      </div>
    </cite>
  </blockquote>
)

Quote.propTypes = {
  avatarAlt: PropTypes.string,
  avatarUrl: PropTypes.string,
  company: PropTypes.string,
  linkUrl: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
}

export default Quote
