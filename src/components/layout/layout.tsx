import React, { useEffect } from 'react'
import emergence from 'emergence.js'

import Topbar from '../topbar/topbar'
import Navibar from '../navibar/navibar'
import Footer from '../footer/footer'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'


interface Props {
  children?: React.ReactNode
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }: Props) => {
  useEffect(() => {
    emergence.init()
    let kwesScript = document.createElement('script')
    kwesScript.setAttribute('src', 'https://kwes.io/js/kwes.js')
    document.head.appendChild(kwesScript)
  })

  return (
    <div>
      <div className="header">
        <Topbar />
        <Navibar title={siteMetadata.title} location={location} />
      </div>
      <div className="body-content">
        {children}
      </div>
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </div>
  )
}

export default Layout
