import { graphql } from 'gatsby'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import Button from '../components/button/button'
import Input from '..//components/input/input'

import chSvg from '../../assets/contact-help.svg';

import '../scss/about.scss'
import '../scss/contact.scss'

interface Props {
  location: Location
}

const Contact: React.FC<Props> = ({ location }: Props) => {

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Contact Us" />
      <Breadcrum links={[
        {label: "Home", to: "/"},
        {label: "Contact Us", to: "#"},
        ]}/>
      <div className="container about-us contact-us">
        <h3 className="custom-heading">Contact Us</h3>
        <div className="row">
          <div className="col-lg-6">
            <h5>How can we help?</h5>
            <img src={chSvg} style={{display: "block", margin: "0 auto"}}/>
          </div>
          <div className="col-lg-6">
            <div className="card no-button">
              <h3>Contact Us</h3>
              <Input name="" label="Company Name" placeholder="Enter your company name" vertical={true}/>
              <Input name="" label="Name" placeholder="Enter your name" vertical={true}/>
              <Input name="" label="Email" placeholder="Enter your email" vertical={true}/>
              <Input name="" label="Phone Number" placeholder="Enter your phone number" vertical={true}/>
              <Input name="" label="Message" placeholder="Your message here" vertical={true} textarea={true}/>
              <div><Button path={"#"} label="Submit" /></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
