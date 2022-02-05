import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import LinkButton from '../components/button/link-button'

import bfSvg from '../../assets/solutions/business-finance.svg'
import chSvg from '../../assets/solutions/charts.svg'
import inSvg from '../../assets/solutions/information.svg'

interface Props {
  location: Location
}

const Solutions: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="SAS App Solutions"
        customDescription="SAS Solutions to Address Business Challenges"
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'Solutions', to: '#' },
        ]}
      />
      <div className="container main">
        <h3 className="custom-heading">
          Tailored Solutions for Specific Outcomes
        </h3>
        <SolutionItems />
        <div className="text-center contact-btn">
          <LinkButton path={'/contact-us'} label="Contact Us" />
        </div>
      </div>
    </Layout>
  )
}

export const SolutionItems: React.FC = () => (
  <div className="row buttom-margin-child">
    <div className="col-md-6 col-xl-4">
      <div className="card" id="SAS-Powered-HTML5-Apps">
        <img src={bfSvg} alt="SAS-Powered HTML5 Apps" />
        <h3>SAS-Powered HTML5 Apps</h3>
        <p>
          Let SAS come to you – with a bespoke app, tailor made to your specific
          workflow and reporting requirements. Built with fully open source
          tools, standard frameworks, and full documentation – you can maintain
          in-house or use our competitive and transparent support package.
        </p>
        <div className="wrapper">
          <LinkButton path={'/sas-powered-apps/'} label="Find Out More" />
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="card" id="EUC-Data-Capture-Control">
        <img src={chSvg} alt="EUC Data Capture & Control" />
        <h3>EUC Data Capture & Control</h3>
        <p>
          Reduce spreadsheet risk by enabling business users to self-load VBA
          driven Excel reporting tools into your preferred database with Data
          Quality at source, 4 eyes (or more) approval at each step, and full
          audit traceability back to the original EUC that generated the
          results.
        </p>
        <div className="wrapper">
          <LinkButton
            path={'https://datacontroller.io'}
            label="Find Out More"
          />
        </div>
      </div>
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="card" id="Modernise-legacy-AF-SCL-Desktop-Apps">
        <img src={inSvg} alt="Modernise legacy AF/SCL Desktop Apps" />
        <h3>Modernise legacy AF/SCL Desktop Apps</h3>
        <p>
          Migrate legacy AF/SCL applications directly to SAS9 or Viya, improving
          the user experience, security, scalability, and delivering a modern,
          self-supportable application built on open source technology and a
          modern SAS stack.
        </p>
        <div className="wrapper">
          <LinkButton
            path={'/modernising-legacy-sas-scl-af-applications'}
            label="Find Out More"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Solutions
