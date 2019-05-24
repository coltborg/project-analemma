import React from 'react'

const Footer = () => (
  <footer className="px-1 py-2 text-xs bg-green-200 flex flex-col sm:flex-row items-center justify-center">
    <a
      className="mb-2 sm:mb-0 mr-4 text-green-900 underline"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/coltborg"
    >
      Github
    </a>
    <span className="mb-2 sm:mb-0 mr-4">/</span>
    <a
      className="mb-2 sm:mb-0 mr-4 text-green-900 underline"
      target="_blank"
      rel="noopener noreferrer"
      href="https://codepen.io/coltborg/"
    >
      CodePen
    </a>
    <span className="mb-2 sm:mb-0 mr-4">/</span>
    <a
      className="mb-2 sm:mb-0 mr-4 text-green-900 underline"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/coltborg"
    >
      Twitter
    </a>
    <span className="mb-2 sm:mb-0 mr-4">/</span>
    <a
      className="mb-2 sm:mb-0 mr-4 text-green-900 underline"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/coltborg/"
    >
      Instagram
    </a>
  </footer>
)

export default Footer
