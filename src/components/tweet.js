import React from 'react'
import PropTypes from 'prop-types'
import TweetEmbed from 'react-tweet-embed'

const Tweet = ({ id, theme }) => (
  <TweetEmbed
    className="mb-10 mx-auto"
    id={id}
    options={{
      theme,
      linkColor: '#056270',
    }}
    placeholder="loading"
  />
)

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
  theme: PropTypes.string,
}

Tweet.defaultProps = {
  theme: 'light',
}

export default Tweet
