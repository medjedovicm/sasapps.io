import React from 'react'
import { graphql } from 'gatsby'

import { PageNotFoundQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
  data: PageNotFoundQuery
  location: Location
}

const NotFound: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Meta site={data.site.siteMetadata} title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFound

export const pageQuery = graphql`
  query PageNotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
