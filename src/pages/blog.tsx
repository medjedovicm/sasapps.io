import { graphql } from 'gatsby'
import React from 'react'

import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Breadcrum from '../components/breadcrum/breadcrum'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta site={meta} title="Blog" />
      <Breadcrum links={[
        {label: "Home", to: "/"},
        {label: "Blog", to: "#"},
        ]}/>
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            {posts.map((post, i) => (
              <Post
                data={post as PostByPathQuery}
                options={{
                  isIndex: true,
                }}
                key={i}
              />
            ))}
          </div>
        </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
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
    }
  }
`
