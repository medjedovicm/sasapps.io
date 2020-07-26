import { graphql } from 'gatsby'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Breadcrum from '../components/breadcrum/breadcrum'
import LinkButton from '../components/button/link-button'

import dtSvg from '../../assets/data.svg';
import pcSvg from '../../assets/pencil.svg';
import idSvg from '../../assets/idea.svg';

interface Props {
  location: Location
}

const Products: React.FC<Props> = ({ location }: Props) => {
  const meta = { ...siteMetadata, location }

  return (
    <Layout location={location}>
      <Meta
        site={meta}
        title="Products - pre-built SAS Apps"
        customDescription="Existing, Ready-To-Use Apps and Tools for SAS"/>
      <Breadcrum links={[
        {label: "Home", to: "/"},
        {label: "Products", to: "#"},
        ]}/>
      <div className="container about-us">
        <h3 className="custom-heading">Products</h3>
        <h1>SAS® Apps and Technology</h1>
        <div className="row buttom-margin-child">
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={dtSvg} alt="Data Controller for SAS®"/>
              <h3>Data Controller for SAS®</h3>
              <p>Enables end user data management and EUC data capture (with 4 eyes approval) on both SAS9 and Viya.  Features include Data Validation at source, Data Workflows, Data Dictionary, Data Catalog, Data Lineage, Data Alerts with a wide range of databases and loading formats supported. </p>
              <div className="wrapper"><LinkButton path={"https://datacontroller.io"} label="Show" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={pcSvg} alt="SAS9API"/>
              <h3>SAS9API</h3>
              <p>Integrate SAS 9 with almost any platform using a familiar (and extendable) REST API interface.  Using existing IOM interfaces, there is nothing to install in your SAS Platform – simply connect and go</p>
              <div className="wrapper"><LinkButton path={"https://sas9api.io"} label="Show" /></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={idSvg} alt="SASjs"/>
              <h3>SASjs</h3>
              <p>A fully open source “opinionated” framework for building HTML5 web applications on SAS 9 and Viya, and the core technology underpinning all of our web apps.  Comprised of a data adapter, SAS Macro library, CLI tool, and supporting documentation.</p>
              <div className="wrapper"><LinkButton path={"https://sasjs.io"} label="Show" /></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products
