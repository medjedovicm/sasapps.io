import React from 'react'

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
        <h3 className="custom-heading">Some text related to Service Here</h3>
        <ServiceItems />
        <div className="text-center">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu
          orci massa. Aenean vehicula leo non augue porttitor, at suscipit dui
          posuere.
        </p>
        <a className="service-link" href=" https://sasapps.io/projects/">
          https://sasapps.io/projects/
        </a>
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
        <img src={sasAppSupport} alt="SAS App Support" />
        <h3>SAS App Support</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu
          orci massa. Aenean vehicula leo non augue porttitor, at suscipit dui
          posuere.
        </p>
        <a className="service-link" href=" https://sasapps.io/pricing/">
          https://sasapps.io/pricing/
        </a>
        <div className="wrapper">
          <LinkButton
            path={'/solutions/#performance-monitoring-and-platform-alerts'}
            label="Find Out More"
          />
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
        <div className="wrapper">
          <LinkButton
            path={'/solutions/#EUC-Data-Capture-Control'}
            label="Find Out More"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Services
