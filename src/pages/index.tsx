import { graphql } from 'gatsby'
import React from 'react'

import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import LinkButton from '../components/button/link-button'

import bfSvg from '../../assets/business-finance.svg';
import stSvg from '../../assets/statistics.svg';
import chSvg from '../../assets/charts.svg';
import inSvg from '../../assets/information.svg';
import bgSvg from '../../assets/bar-graph.svg';
import fiSvg from '../../assets/financing.svg';

interface Props {
  data: IndexQueryQuery
  location: Location
}

const Home: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <div className="main-background">
        <div className="container">
          <h1>SAS Apps</h1>
          <h4>Custom Interfaces to the world's most powerful Analytics Platform</h4>
          <div className="container card-gray">
            <p className="heading">Leverage your investment in SAS with a range of solution and product offerings to fit your specific needs. </p>
            <div className="row">
              <div className="col-12 col-md-9 col-lg-10">
                <p className="info">We blend decades of traditional SAS experience with open source technology offerings to give you well documented solutions that you can either maintain yourselves, or allow us to continue to support with a transparent range of support packages.</p>
              </div>
              <div className="col-md-3 col-lg-2 text-center">
                <LinkButton path={"/products"} label="Our Products" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h5>What We Offer:</h5>
        <div className="row buttom-margin-child">
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={bfSvg} />
              <h3>SAS-Powered HTML5 Apps</h3>
              <p>Let SAS come to you – with a bespoke app, tailor made to your specific workflow and reporting requirements.  Built with fully open source tools, standard frameworks, and ...</p>
              <div className="wrapper"><LinkButton path={"/solutions"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={stSvg} />
              <h3>Performance Monitoring and Platform Alerts</h3>
              <p>Gain a real time and historical perspective of your SAS platform with a highly customisable performance dashboard. Configure automated ...</p>
              <div className="wrapper"><LinkButton path={"/solutions"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={chSvg} />
              <h3>EUC Data Capture & Control</h3>
              <p>Reduce spreadsheet risk by enabling business users to self-load VBA driven Excel reporting tools into your preferred database with Data Quality at source, 4 eyes (or more) approval at each step ...</p>
              <div className="wrapper"><LinkButton path={"/solutions"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={inSvg} />
              <h3>Modernise legacy AF/SCL Desktop Apps</h3>
              <p>Migrate legacy AF/SCL applications directly to SAS9 or Viya, improving the user experience, security,scalability, and delivering a modern, self-supportable ...</p>
              <div className="wrapper"><LinkButton path={"/solutions"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={bgSvg} />
              <h3>Viya Readiness & Migration Service for Existing SAS 9 Apps</h3>
              <p>Rebuild your existing SAS 9 applications using modern, supportable frameworks (eg React or Angular) in such a way that they can be easily ...</p>
              <div className="wrapper"><LinkButton path={"/solutions"} label="Find Out More" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={fiSvg} />
              <h3>SAS9 Health Report</h3>
              <p>Without changing anything on your SAS 9 platform, we perform a complete scan and provide you with an instant report of the  trouble spots – such as dangling metadata, security misconfigurations ...</p>
              <div className="wrapper"><LinkButton path={"/solutions"} label="Find Out More" /></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        facebook
        linkedin
        adsense
      }
    }
  }
`
