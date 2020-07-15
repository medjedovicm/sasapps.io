import React from 'react'
import { Link } from 'gatsby'
import Topbar from '../topbar/topbar'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-xl navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation"
          style={{position: "absolute", top: "-60px", right: 0}}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} href="/">Home</a></li>
            <li className="nav-item"><a className={location.pathname === '/solutions' ? 'nav-link active' : 'nav-link'} href="/solutions">Solutions</a></li>
            <li className="nav-item"><a className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'} href="/products">Products</a></li>
            <li className="nav-item"><a className={location.pathname === '/contact-us' ? 'nav-link active' : 'nav-link'} href="/contact-us">Contact</a></li>
            <li className="nav-item"><a className={location.pathname === '/about-us' ? 'nav-link active' : 'nav-link'} href="/about-us">About us</a></li>
            <li className="nav-item"><a className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'} href="/blog">Blog</a></li>
          </ul>
          <Topbar mobile={true} />
        </div>
      </nav>
    </div>
  )
}

export default Navibar
