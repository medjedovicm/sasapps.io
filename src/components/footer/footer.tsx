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
            <div>
              <a href="tel:+4402039949849">
                <img src={mobileSvg} />
                +44 (0) 203 9949 849
              </a>
            </div>
            <div>
              <a href="mailto:contact@sasapps.to">
                <img src={mailSvg} />
                contact@sasapps.to
              </a>
            </div>
            <div>
              <a href="#">
                <img src={locSvg} />
                86-90 4th Floor, Paul Street, London, EC2A 4NE
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <h3 className="custom-heading">Social</h3>
          <div className="content">
            <div>
            <SocialMedia
              facebook={siteMetadata.facebook}
              linkedin={siteMetadata.linkedin}
              twitter={siteMetadata.twitter}
              youtube={siteMetadata.youtube}
              instagram={"#"}
              moreSpacing={true} />
            </div>
            <div className="subscribe kwes-form" style={{maxHeight: "35px", overflow: "hidden"}}>
              <form method="POST" action="https://kwes.io/api/foreign/forms/BAScYvAqKdAN1bC2H0wQ" no-reload="" success-message="Thank you for Subscribing">
                <Input name="subscription_email" label="Newsletter" placeholder="Enter your email" rules="required"/>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <h3 className="custom-heading">Quick Links</h3>
          <div className="content quicklinks">
            <a href="/">Home</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/solutions">Solutions</a>
            <a href="/about-us">About us</a>
            <a href="/products">Products</a>
          </div>
        </div>
        
      </div>
    </div>
    <div className="bottom">
      <p>© 2017 Analytium Ltd is a limited company registered in England and Wales. Company Registration No. 10214873 VAT: GB248508389</p>
    </div>
  </div>
)

export default Footer
