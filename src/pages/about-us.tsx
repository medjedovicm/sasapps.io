import { graphql } from 'gatsby'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'

interface Props {
  location: Location
}

const About: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta site={meta} title="About Us" />
      <Breadcrum links={[
        {label: "Home", to: "/"},
        {label: "About Us", to: "#"},
        ]}/>
      <div className="container about-us">
        <h3 className="custom-heading">About Us</h3>
        <h5>Analyse   Implement   Maximise</h5>
        <h6>Where does our name come from?</h6>
        <p>Our name, analytium, comes from two words “Analytics” and the Latin suffix “ium”.</p>
        <h6>What are the definitions of these words?</h6>
        <p>The definition of ‘Analytics’ is the systematic computational analysis of data or statistics, whilst ‘ium’ is a Latin suffix used in the formation of the names of metallic elements.</p>
        <h6>Why is this important?</h6>
        <p>By combining these we get to what we are about, we use analytics to discover stories, patterns and trends in your data which will help you formulate ideas and create positive outcomes for the future.</p>
        <h6>What else do we offer?</h6>
        <p>We offer full transparency, We believe that offering this ensures that you are fully involved and up to date with your project, whether that be giving you full insight into how we’re utilising our time, or even how we’re getting to the results you’re looking for. We document everything to ensure you have a full understanding of everything we do with you.</p>
        <h5>Our Values</h5>
        <p>Our values are centred around what our people value in themselves as well as each other. We collectively strive to use our values to guide our decision making and our ways of working effectively with each other and our customers.</p>
        <h3 className="custom-heading">Trust</h3>
        <p>Our people are passionate about data analytics and are self-driven to keep up with current technology trends and improve on our skills. We are trusted by our customers and peers to be the best we can be and continuously improve ourselves and deliver optimal outcomes. </p>
        <h3 className="custom-heading">Win-Win approach</h3>
        <p>To achieve a win-win outcome, we become an extended part of your business and commit ourselves as if it were one of our own.  We really understand that a win for you is also a win for us as much as a loss for you is also a loss for us. Your success ultimately leads to our success as a business. </p>
        <h3 className="custom-heading">Our Commitment to You</h3>
        <p>At <span className="aquamarine_text">{"{An}"}</span>alytium, we strive to deliver the best, through our people with their technical skills and their unwavering commitment to our customers. The technologies we work with and the operating models we use, afford our people the time to fully understand our customers’ needs, whilst maximising opportunities to evolve and also ensuring that we deliver above and beyond what is expected from us. We believe that delivering on all of these promises is not only key to your success, but it is also key to our success.</p>
      </div>
    </Layout>
  )
}

export default About
