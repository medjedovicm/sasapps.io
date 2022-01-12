import { graphql } from 'gatsby'
import React from 'react'

import { MetaQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import LinkButton from '../components/button/link-button'

import firstPng from '../../assets/42.png'
import secondSvg from '../../assets/32.svg'
import thirdSvg from '../../assets/11.svg'
import DcSvg from '../../assets/DCSymbol.svg'
import DcNameSvg from '../../assets/DC-name-1.svg'
import JsSvg from '../../assets/JS-1.svg'
import SasSvg from '../../assets/SAS-illu-1.svg'
import SasnameSvg from '../../assets/SAS-name-1.svg'
import mainSvg from '../../assets/22.svg'

interface Props {
  data: MetaQuery
  location: Location
}

const Home: React.FC<Props> = ({ data, location }: Props) => {
  const meta = { ...data.site?.meta, location }

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <div className="main-background">
        <div className="container">
          <h4>
            Custom Interfaces to the world&apos;s most powerful{' '}
            <span style={{ color: '#8AC71E' }}> Analytics Platform</span>
          </h4>
          <div className="row">
            <div className="col-lg-4">
              <p className="heading">
                Leverage your investment in SAS&reg; with a range of solution
                and product offerings to fit your specific needs.{' '}
              </p>
              {/* <div className="row"> */}
              {/* <div className="col-12 col-md-9 col-lg-10"> */}
              <p className="info">
                We blend decades of traditional SAS&reg; experience with open
                source technology offerings to give you well documented
                solutions that you can either maintain yourselves, or allow us
                to continue to support with a transparent range of support
                packages.
              </p>
              {/* </div> */}
              {/* <div className="col-md-3 col-lg-2 text-center"> */}
              <LinkButton path={'/products'} label="Our Products" />
              {/* </div> */}
              {/* </div> */}
            </div>
            <div className="col-lg-4">
              <img src={mainSvg} alt="#" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>What We Offer</h1>
        <div className="row buttom-margin-child">
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={firstPng} alt="SAS App Delivery" />
              <div className="content-wrapper col-lg-12">
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
              <div className="content-wrapper col-lg-12">
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
              <div className="content-wrapper col-lg-12">
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
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img
                src={DcSvg}
                alt="Data Controller for SAS"
                style={{ width: '160px', height: '160px' }}
              />
              <img
                src={DcNameSvg}
                alt="Data Controller for SAS"
                style={{ width: '243px', height: '27px' }}
              />
              <div className="content-wrapper col-lg-12">
                <h3>Data Controller for SAS</h3>
                <p>
                  Enable Business Users to make controlled changes to data in
                  SAS
                </p>
                <a className="service-link" href="https://datacontroller.io">
                  https://datacontroller.io
                </a>
              </div>

              <div className="wrapper">
                <LinkButton
                  path={'/solutions/#Modernise-legacy-AF-SCL-Desktop-Apps'}
                  label="Find Out More"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img
                src={JsSvg}
                alt="The SASjs Framework"
                style={{ width: '163px', height: '187px' }}
              />
              <div className="content-wrapper col-lg-12">
                <h3>The SASjs Framework</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus eu orci massa. Aenean vehicula leo non augue
                  porttitor, at suscipit dui posuere.
                </p>
                <a className="service-link" href="https://sasjs.io">
                  https://sasjs.io
                </a>
              </div>

              <div className="wrapper">
                <LinkButton
                  path={
                    '/solutions/#Viya-Readiness-Migration-Service-for-Existing-SAS-9-Apps'
                  }
                  label="Find Out More"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img
                src={SasSvg}
                alt="SASensei"
                style={{ width: '176px', height: '160px' }}
              />
              <img
                src={SasnameSvg}
                alt="SASSenSei"
                style={{ width: '176px', height: '31px' }}
              />
              <div className="content-wrapper col-lg-12">
                <h3> SASensei</h3>
                <p>Global SAS Challenge Platform with over 5000 SAS players</p>
                <a className="service-link" href="https://sasensei.com">
                  https://sasensei.com
                </a>
              </div>

              <div className="wrapper">
                <LinkButton
                  path={'/solutions/#SAS9-Health-Report'}
                  label="Find Out More"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query MetaQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        facebook
        youtube
        linkedin
      }
    }
  }
`
