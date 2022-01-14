import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import LinkButton from '../components/button/link-button'

import firstPng from '../../assets/42.png'
import secondSvg from '../../assets/32.svg'
import thirdSvg from '../../assets/11.svg'

interface Props {
  location: Location
}

const Services: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="SAS App Services"
        customDescription="SAS Services to Address Business Challenges"
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '#' },
        ]}
      />
      <div className="container about-us">
        <h3 className="custom-heading">Services</h3>
        <h1>Our Services</h1>
        <div className="row buttom-margin-child">
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={firstPng} alt="SAS App Delivery" />
              <div className="content-wrapper">
                <h3>SAS App Delivery</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus eu orci massa. Aenean vehicula leo non augue
                  porttitor, at suscipit dui posuere.
                </p>
                <a
                  className="service-link"
                  href=" https://sasapps.io/projects/"
                >
                  https://sasapps.io/projects/
                </a>
              </div>
              <div className="wrapper">
                <LinkButton
                  path={'/solutions/#SAS-Powered-HTML5-Apps'}
                  label="Find Out More"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={secondSvg} alt="SAS App Support" />
              <div className="content-wrapper">
                <h3>SAS App Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus eu orci massa. Aenean vehicula leo non augue
                  porttitor, at suscipit dui posuere.
                </p>
                <a className="service-link" href=" https://sasapps.io/pricing/">
                  https://sasapps.io/pricing/
                </a>
              </div>

              <div className="wrapper">
                <LinkButton
                  path={
                    '/solutions/#performance-monitoring-and-platform-alerts'
                  }
                  label="Find Out More"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={thirdSvg} alt="SASjs Enhancement" />
              <div className="content-wrapper">
                <h3>SASjs Enhancement</h3>
                <p>
                  We can add new features to SASjs (at a discounted rate) to
                  support particular use cases
                </p>
              </div>

              <div className="wrapper">
                <LinkButton
                  path={'/solutions/#EUC-Data-Capture-Control'}
                  label="Find Out More"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <LinkButton path={'/contact-us'} label="Contact Us" />
        </div>
      </div>
    </Layout>
  )
}

export default Services
