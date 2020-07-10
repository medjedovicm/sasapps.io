import React from 'react'
import { Link } from 'gatsby'

import youtubeSvg from '../../../assets/social/youtube.svg';
import facebookSvg from '../../../assets/social/facebook.svg';
import linkedinSvg from '../../../assets/social/linkedin.svg';
import twitterSvg from '../../../assets/social/twitter.svg';
import instaSvg from '../../../assets/social/instagram.svg';

// import './style.scss'

interface Props {
  youtube: string
  facebook: string
  linkedin: string
  twitter: string
  instagram: string
  moreSpacing: boolean
}

const SocialMedia: React.FC<Props> = ({ youtube, facebook, linkedin, twitter, instagram, moreSpacing }: Props) => {
  return (
    <div className={moreSpacing ? "extra-space" : ""}>
      { linkedin && <img src={linkedinSvg} /> }
      { twitter && <img src={twitterSvg} /> }
      { facebook && <img src={facebookSvg} /> }
      { youtube && <img src={youtubeSvg} /> }
      { instagram && <img src={instaSvg} /> }
    </div>
  )
}

export default SocialMedia
