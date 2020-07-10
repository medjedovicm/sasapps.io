import { graphql } from 'gatsby'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import Button from '../components/button/button'

import bfSvg from '../../assets/business-finance.svg';
import stSvg from '../../assets/statistics.svg';
import chSvg from '../../assets/charts.svg';
import inSvg from '../../assets/information.svg';
import bgSvg from '../../assets/bar-graph.svg';
import fiSvg from '../../assets/financing.svg';

import '../scss/about.scss'

interface Props {
  location: Location
}

const Solutions: React.FC<Props> = ({ location }: Props) => {

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Solutions" />
      <Breadcrum links={[
        {label: "Home", to: "/"},
        {label: "Solutions", to: "#"},
        ]}/>
      <div className="container about-us">
        <h3 className="custom-heading">Solutions</h3>
        <h5>Tailored Solutions for Specific Outcomes</h5>
        <div className="row buttom-margin-child">
          <div className="col-md-6 col-xl-4">
            <div className="card no-button">
              <img src={bfSvg} />
              <h3>SAS-Powered HTML5 Apps</h3>
              <p>Let SAS come to you – with a bespoke app, tailor made to your specific workflow and reporting requirements.  Built with fully open source tools, standard frameworks, and delivered with full documentation – you can choose to maintain in-house or choose a competitive and transparent support package.</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card no-button">
              <img src={stSvg} />
              <h3>Performance Monitoring and Platform Alerts</h3>
              <p>Gain a real time and historical perspective of your SAS platform with a highly customisable performance dashboard.  Configure automated alerts (eg email, SMS, phone call) on virtually any event – disk usage, changes to metadata, addition of new columns, new admin users - (almost) anything you can imagine..</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card no-button">
              <img src={chSvg} />
              <h3>EUC Data Capture & Control</h3>
              <p>Reduce spreadsheet risk by enabling business users to self-load  VBA driven Excel reporting tools into your preferred database with Data Quality at source, 4 eyes (or more) approval at each step, and full audit traceability back to the original EUC that generated the results.</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card no-button">
              <img src={inSvg} />
              <h3>Modernise legacy AF/SCL Desktop Apps</h3>
              <p>Migrate legacy AF/SCL applications directly to SAS9 or Viya, improving the user experience, security,scalability, and delivering a modern, self-supportable application built on open source technology and a modern SAS stack.</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card no-button">
              <img src={bgSvg} />
              <h3>Viya Readiness & Migration Service for Existing SAS 9 Apps</h3>
              <p>Rebuild your existing SAS 9 applications using modern, supportable frameworks (eg React or Angular) in such a way that they can be easily maintained by generic developers, and later ‘flipped’ to Viya with a single switch.</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card no-button">
              <img src={fiSvg} />
              <h3>SAS9 Health Report</h3>
              <p>Without changing anything on your SAS 9 platform, we perform a complete scan and provide you with an instant report of the  trouble spots – such as dangling metadata, security misconfigurations, SAS coding issues, custom code in DI Studio, missing primary keys – and much much more.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button path={"/contact"} label="Contact Us" />
        </div>
      </div>
    </Layout>
  )
}

export default Solutions
