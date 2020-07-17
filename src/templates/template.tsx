import { graphql } from 'gatsby'
import React from 'react'

import Post from './post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Breadcrum from '../components/breadcrum/breadcrum'
import Page from './page/page'
import { PostByPathQuery } from '../../types/graphql-types'

interface Props {
  data: PostByPathQuery
  location: Location
}

const Template: React.FC<Props> = ({ data, location }: Props) => {
  const title = data.post?.frontmatter?.title || ''
  return (
    <div>
      <Layout location={location}>
        <Meta
          title={title}
          site={data.site?.meta}
        />
        <Breadcrum links={[
          {label: "Home", to: "/"},
          {label: "Blog", to: "/blog"},
          {label: title, to: "#"},
          ]}/>
        <div className="container">
          <Post
            data={data}
            options={{
              isIndex: false,
              adsense: data.site?.meta?.adsense,
            }}
          />
        </div>
      </Layout>
    </div>
  )
}

export default Template

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        adsense
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        category
        tags
        description
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
