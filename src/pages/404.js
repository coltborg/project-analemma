import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1, P } from '../components/designSystem'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-col items-center justify-center not-found">
      <H1>
        <span aria-hidden="true">😵</span> NOT FOUND
      </H1>
      <P>
        Go back <Link to="/">home</Link>
      </P>
    </div>
  </Layout>
)

export default NotFoundPage
