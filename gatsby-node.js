/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const _ = require('lodash')
const PostTemplate = path.resolve('./src/templates/template.tsx')
const PageTemplate = path.resolve('./src/templates/markdownPageTemplate.tsx')
const tagTemplate = path.resolve('./src/templates/tags.tsx')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/about-us`,
    toPath: `/about`,
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: `/contact-us`,
    toPath: `/contact`,
    redirectInBrowser: true,
    isPermanent: true,
  })

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|tsx/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      path
                    }
                  }
                }
              }
            }
            tagsGroup: allMarkdownRemark(limit: 1000) {
              group(field: frontmatter___tags) {
                fieldValue
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        // Create blog posts
        const items = data.allFile.edges
        const posts = items.filter(({ node }) => /posts/.test(node.name))
        posts.forEach(({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PostTemplate,
          })
        })

        // Create markdown pages
        const pages = items.filter(({ node }) => /pages/.test(node.name))
        pages.forEach(({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PageTemplate,
          })
        })

        // Extract tag data from query
        const tags = data.tagsGroup.group
        // Make tag pages
        tags.forEach((tag) => {
          createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
