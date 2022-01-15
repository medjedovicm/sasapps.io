import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import photoFrame from '../../assets/photo-frame.png'
import profile1 from '../../assets/profile-1.png'
import profile2 from '../../assets/team/mihajlo.png'
import profile3 from '../../assets/team/sabir.png'
import profile4 from '../../assets/team/saad.png'
import profile5 from '../../assets/team/krishna.png'
import profile6 from '../../assets/profile-6.png'
import profile7 from '../../assets/team/allan.jpeg'

interface Props {
  location: Location
}

const About: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="About Analytium"
        customDescription="About Analytium - our mission and values"
      />
      <Breadcrum
        links={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '#' },
        ]}
      />
      <div className="container main about-us">
        <h3 className="custom-heading">Our Team</h3>
        <p className="custom-text">
          The SAS Apps team have been together (in various forms) since 2018.{' '}
          <br /> We built the SASjs Framework, Data Controller for SAS, and
          Sasensei.com - not to mention, numerous customer projects. <br /> We
          usually work through SAS partners, but we can also be engaged
          directly.
        </p>
        <div className="row">
          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img className="profileImage" id="p1" src={profile1} alt="#" />
            </div>
            <p className="profile-name">Yury</p>
            <p className="profile-heading">Node Master</p>
            <p className="profile-text col-lg-10">
              With a nose for NodeJS and a mind for Docker, Yury blends
              technical and soft skills with a project delivery mentality one
              could describe as sailing a boat to harbour.
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img className="profileImage" id="p2" src={profile2} alt="#" />
            </div>
            <p className="profile-name">Mihajlo</p>
            <p className="profile-heading">Angular Boss</p>
            <p className="profile-text col-lg-10">
              A drummer and adept Angularite, Mihajlo leads development on Data
              Controller for SAS and also handles the automated testing and
              continuous integration.
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img className="profileImage" id="p3" src={profile3} alt="#" />
            </div>
            <p className="profile-name">Sabir</p>
            <p className="profile-heading">Captain React</p>
            <p className="profile-text col-lg-10">
              Sabir has the sacred ability to make things work. The lead
              developer for Sasensei.com, Sabir also contributes to the SASjs
              framework and related projects.
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img src={profile4} className="profileImage" id="p4" alt="#" />
            </div>
            <p className="profile-name">Saad</p>
            <p className="profile-heading">Application Support Hero</p>
            <p className="profile-text col-lg-10">
              A team player with a particular superpower - the ability to do
              just about anything! Be that docker, shell scripting, windows,
              unix, JS, TS, APIs - nothing is impossible.
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img src={profile5} alt="#" className="profileImage" id="p5" />
            </div>
            <p className="profile-name">Krishna</p>
            <p className="profile-heading">SASjs Architect</p>
            <p className="profile-text col-lg-10">
              Co-founder of the SASjs concept, Krishna laid the foundations for
              the SASjs Adapter, CLI, lint, vs-code extension, seed apps and
              more.{' '}
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img src={profile6} alt="#" className="profileImage" id="p6" />
            </div>
            <p className="profile-name">Ivor</p>
            <p className="profile-heading">SAS Wizard</p>
            <p className="profile-text col-lg-10">
              With decades of SAS and AF/SCL experience, Ivor can transform
              couldrons of legacy catalog code into lightweight, well documented
              SAS services faster than you can say PROC SPELL
            </p>
          </div>

          <div className="profile col-lg-4 col-md-6">
            <div className="image-wrapper">
              <img src={profile7} alt="#" className="profileImage" id="p7" />
            </div>
            <p className="profile-name">Allan Bowe</p>
            <p className="profile-heading">Founder</p>
            <p className="profile-text col-lg-10">
              When not creating actual SAS Apps, Allan is typically working on
              the tools, team, framework, and community that supports SAS Apps.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
