import React from 'react'
import { Helmet } from 'react-helmet'

import { siteMetadata } from '../../../types/graphql-types'

interface Props {
  site:
    | Pick<
        siteMetadata,
        'title' | 'description' | 'author' | 'twitter' | 'facebook' | 'youtube' | 'linkedin' | 'adsense' | 'siteUrl' | 'location'
      >
    | null
    | undefined
  title?: string
}

const Meta: React.FC<Props> = ({ site, title }: Props) => {
  const siteTitle = site?.title || ''
  const siteUrl = site?.siteUrl || ''
  const author = site?.author || ''
  const siteDescription = site?.description || ''
  const location = site?.location || {}
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  return (
    <Helmet
      title={pageTitle}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: `${site?.twitter}`,
        },
        {
          name: "twitter:image",
          content: `${siteUrl}/img/sas-apps-2.png`,
        },
        {
          name: "twitter:title",
          content: pageTitle,
        },
        {
          name: "twitter:description",
          content: siteDescription,
        },
        {
          name: 'facebook:site',
          content: `${site?.facebook}`,
        },
        {
          name: 'youtube:site',
          content: `${site?.youtube}`,
        },
        {
          name: 'linkedin:site',
          content: `${site?.linkedin}`,
        },
        { property: 'og:title', content: pageTitle },
        { property: 'og:type', content: 'website' },
        {
          name: 'description',
          property: 'og:description',
          content: siteDescription,
        },
        {
          property: 'og:url',
          content: `${siteUrl}${location.pathname}${location.hash}`,
        },
        {
          name: "image",
          property: 'og:image',
          content: `${siteUrl}/img/sas-apps.png`,
        },
        {
          name: "author",
          property: 'author',
          content: author
        },
      ]}
    />
  )
}
export default Meta
