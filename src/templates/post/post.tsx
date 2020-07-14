import { Link } from 'gatsby'
import React from 'react'

import Adsense from '../../components/adsense/adsense'
import LinkButton from '../../components/button/link-button'
import Badge from '../../components/badge/badge'
import { PostByPathQuery } from '../../../types/graphql-types'

import './style.scss'

const getDescription = (content: string): string => {
  const body = content.replace(
    /<blockquote>/g,
    '<blockquote class="blockquote">'
  )
  if (body.match('<!--more-->')) {
    const [description] = body.split('<!--more-->')
    return description
  }
  return body
}

interface Props {
  data: PostByPathQuery
  options: {
    isIndex: boolean
    adsense?: string | null
  }
}

const Post: React.FC<Props> = ({ data, options }: Props) => {
  const frontmatter = data.post?.frontmatter
  const path = frontmatter?.path || ''
  const { isIndex, adsense } = options
  const html = data.post?.html || ''
  const isMore = isIndex && !!html.match('<!--more-->')

  return (
    <div className="article" key={path}>
      <div className="container">
        <div className="info">
          <Link style={{ boxShadow: 'none' }} to={path}>
            <h1>{frontmatter?.title}</h1>
            <time dateTime={frontmatter?.date}>{frontmatter?.date}</time>
          </Link>
          <Badge label={frontmatter?.category || ''} primary={true} />
          {(frontmatter?.tags || []).map((tag, index) => (
            <Badge label={tag as string} primary={false} key={index} />
          ))}
        </div>
        <div className="content">
          <p>{frontmatter?.description}</p>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: isMore ? getDescription(html) : html,
          }}
        />
        {isMore && <LinkButton path={path} label="MORE" primary={true} />}
        {!isIndex && <Adsense clientId={adsense} slotId="" format="auto" />}
      </div>
    </div>
  )
}

export default Post
