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
  let featuredImg = data.post?.frontmatter.featuredImage.childImageSharp.fixed
  if ( !featuredImg ) featuredImg = { src: ''}

  return (
    <div>
      <Layout location={location}>
        <Meta
          title={title}
          site={data.site?.meta}
          prependtitle={false}
          previewImg={featuredImg.src}
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
        featuredImage {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        path
        category
        tags
        description
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
