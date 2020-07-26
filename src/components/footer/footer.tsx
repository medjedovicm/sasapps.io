import { Link } from 'gatsby'
import React from 'react'
import Input from '../input/input'
import { siteMetadata } from '../../../gatsby-config'
import SocialMedia from '../socialmedia/socialmedia'

import mobileSvg from '../../../assets/mobile.svg';
import mailSvg from '../../../assets/mail.svg';
import locSvg from '../../../assets/location.svg';


interface Props {
  author: string
  title: string
}

const Footer: React.FC<Props> = ({ author, title }: Props) => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <h3 className="custom-heading">Contact Us</h3>
          <div className="content">
            {/*<div>
              <a href="tel:+4402039949849">
                <img src={mobileSvg} alt="mobile icon"/>
                +44 (0) 203 9949 849
              </a>
            </div>
            <div>
              <a href="mailto:contact@sasapps.to">
                <img src={mailSvg} alt="mail icon"/>
                contact@sasapps.to
              </a>
            </div>*/}
            <div>
              <span>
                <img src={locSvg} alt="address icon" />
                <span class="aquamarine_text">{An}</span>alytium Ltd, 86-90 4th Floor, Paul Street, London, EC2A 4NE
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <h3 className="custom-heading">Social</h3>
          <div className="content">
            <div style={{ padding: 0 }} >
            <SocialMedia
              facebook={siteMetadata.facebook}
              linkedin={siteMetadata.linkedin}
              twitter={siteMetadata.twitter}
              youtube={siteMetadata.youtube}
              moreSpacing={true} />
            </div>
            <div className="subscribe kwes-form" style={{maxHeight: "70px", overflow: "hidden"}}>
              <form method="POST" action="https://kwes.io/api/foreign/forms/O68mn1H8QHlz02b1VGsr" no-reload="" success-message="Thank you for Subscribing">
                <Input name="subscription_email" label="Newsletter" placeholder="Enter your email" rules="required|email"/>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <h3 className="custom-heading">Quick Links</h3>
          <div className="content quicklinks">
            <a href="/">Home</a>
            <a href="/contact-us">Contact</a>
            <a href="/solutions">Solutions</a>
            <a href="/about-us">About Us</a>
            <a href="/products">Products</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
        
      </div>
    </div>
    <div className="bottom">
      <p>© 2020 <span class="aquamarine_text">{An}</span>alytium Ltd is a limited company registered in England and Wales. Company Registration No. 10214873 VAT: GB248508389</p>
    </div>
  </div>
)

export default Footer
