import { graphql } from 'gatsby'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import LinkButton from '../components/button/link-button'
import Button from '../components/button/button'
import Input from '..//components/input/input'

import chSvg from '../../assets/contact-help.svg';

interface Props {
  location: Location
}

const Contact: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta site={meta} title="Contact Us" />
      <Breadcrum links={[
        {label: "Home", to: "/"},
        {label: "Contact Us", to: "#"},
        ]}/>
      <div className="container about-us contact-us">
        <h3 className="custom-heading">Contact Us</h3>
        <div className="row">
          <div className="col-lg-6">
            <h5>How can we help?</h5>
            <img src={chSvg} style={{display: "block", margin: "0 auto", maxWidth: "100%"}} alt="How can we help?"/>
          </div>
          <div className="col-lg-6">
            <div className="card no-button kwes-form">
              <h3>Contact Us</h3>
              <form method="POST" action="https://kwes.io/api/foreign/forms/PQBmKKKpmXWPjIz1q7bl" no-reload="">
                <Input name="company" label="Company Name" placeholder="Enter your company name" vertical={true}/>
                <Input name="name" label="Name" placeholder="Enter your name" vertical={true} rules="required|max:50"/>
                <Input name="email" label="Email" placeholder="Enter your email" vertical={true} rules="required|email"/>
                <Input name="phone_number" label="Phone Number" placeholder="Enter your phone number" vertical={true} rules="required|max:30"/>
                <Input name="message" label="Message" placeholder="Your message here" vertical={true} textarea={true} rules="required|max:100"/>
                <Button type="submit" label="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
