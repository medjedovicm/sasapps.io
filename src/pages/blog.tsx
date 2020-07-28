import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"

import { BlogIndexQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Breadcrum from '../components/breadcrum/breadcrum'

interface Props {
  data: BlogIndexQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="Blog"
        customDescription="Welcome to the SAS Apps blog."/>
      <Breadcrum links={[
        {label: "Home", to: "/"},
        {label: "Blog", to: "#"},
        ]}/>
      <div className="container">
        <h1 className="text-center">SAS Apps' Latest News</h1>
        <p className="text-center">You've reached the front page for the latest news and updates in the world of Analytium SAS Apps.</p>
        <div className="row justify-content-md-center">
          {posts.map((data, i) => {
            const frontmatter = data.post?.frontmatter
            const path = frontmatter?.path || ''
            let featuredImg = frontmatter?.featuredImage.childImageSharp
            return (
              <div className="col-md-6 col-xl-4" key={i}>
                <div className="blog-grid-item">
                  <Link to={path}>
                    <Img fluid={featuredImg.fluid} />
                  </Link>
                  <div className="content">
                    <Link style={{ boxShadow: 'none' }} to={path}>
                      <h3>{frontmatter?.title}</h3>
                    </Link>
                    <time dateTime={frontmatter?.date}>{frontmatter?.date}</time>
                    <p>{frontmatter?.description}</p>
                  </div>
                </div>
              </div>
            )})}
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
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            path
            description
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
