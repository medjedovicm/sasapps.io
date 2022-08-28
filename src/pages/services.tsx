import React from 'react'
import { Link } from 'gatsby'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import LinkButton from '../components/button/link-button'

import sasAppDelivery from '../../assets/services/sas-app-delivery.png'
import sasAppSupport from '../../assets/services/sas-app-support.svg'
import sasjsEnhance from '../../assets/services/sasjs-enhance.svg'

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
      <div className="container main">
        <h3 className="custom-heading">SAS Apps Services </h3>
        <ServiceItems />
        <div className="text-center contact-btn">
          <LinkButton path={'/contact-us'} label="Contact Us" />
        </div>
      </div>
    </Layout>
  )
}

export const ServiceItems: React.FC = () => (
  <div className="row buttom-margin-child">
    <div className="col-md-6 col-xl-4">
      <div className="card">
        <img src={sasAppDelivery} alt="SAS App Delivery" />
        <h3>SAS App Delivery</h3>
        <p>
          When not building actual SAS Apps, our team builds tools to build SAS
          Apps faster!
        </p>
        <p>You can build on our expertise too.</p>
        <Link to={'/projects'} title={'SAS Projects'} className="service-link">
          https://sasapps.io/projects/
        </Link>
        <div className="wrapper">
          <LinkButton path={'/projects'} label="Find Out More" />
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="card">
        <img src={sasAppSupport} alt="SAS App Support" />
        <h3>SAS App Support</h3>
        <p>
          Do you have existing SAS Powered Apps, but lack the resource to
          support them? We offer fixed price plans to keep your interfaces
          active.
        </p>
        <Link to={'/support'} title={'SAS Support'} className="service-link">
          https://sasapps.io/support/
        </Link>
        <div className="wrapper">
          <LinkButton path={'/support'} label="Find Out More" />
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="card">
        <img src={sasjsEnhance} alt="SASjs Enhancement" />
        <h3>SASjs Enhancement</h3>
        <p>
          We can add new features to SASjs (at a discounted rate) to support
          particular use cases
        </p>
        <Link to={'/pricing'} title={'SAS Pricing'} className="service-link">
          https://sasapps.io/pricing/
        </Link>
        <div className="wrapper">
          <LinkButton path={'/pricing'} label="Find Out More" />
        </div>
      </div>
    </div>
  </div>
)

export default Services
