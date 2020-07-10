import React from 'react'
import { Link } from 'gatsby'

import Input from '../input/input'
import SocialMedia from '../socialmedia/socialmedia'
import analytiumSvg from '../../../assets/analytium.svg';
import mobileSvg from '../../../assets/mobile.svg';
import mailSvg from '../../../assets/mail.svg';
import userSvg from '../../../assets/user.svg';

import './style.scss'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3">
          <Link className="text-center" to="/">
            <img src={analytiumSvg} />
          </Link>
        </div>
        <div className="col-xl-9">
          <div className="contact-links">
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
              <Input name="" label="Subscribe" placeholder="Enter your email"/>
            </div>
            <div>
              <SocialMedia
              facebook={true}
              linkedin={true}
              twitter={true}
              youtube={true} />
            </div>
            <div>
              <span><img src={userSvg} />Log In</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navibar
