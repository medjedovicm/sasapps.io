import React from 'react'
import { Link } from 'gatsby'
// import Topbar from '../topbar/topbar'
import sasAppsPNG from '../../../assets/sas-apps.svg'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location }: Props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="logo text-center" to="/">
          <img src={sasAppsPNG} alt="SAS&reg; Apps Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className={
                  location.pathname === '/' ? 'nav-link active' : 'nav-link'
                }
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  location.pathname.startsWith('/solutions')
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href="/solutions"
              >
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  location.pathname.startsWith('/products')
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href="/products"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  location.pathname.startsWith('/contact-us')
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href="/contact-us"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  location.pathname.startsWith('/about-us')
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href="/about-us"
              >
                About us
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  location.pathname.startsWith('/blog')
                    ? 'nav-link active'
                    : 'nav-link'
                }
                href="/blog/"
              >
                Blog
              </a>
            </li>
          </ul>
          {/*<Topbar mobile={true} />*/}
        </div>
      </nav>
    </div>
  )
}

export default Navibar
