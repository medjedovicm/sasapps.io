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
      { linkedin && <a href={linkedin} target="_blank" rel="noreferrer"><img src={linkedinSvg} alt="linkedin icon"/></a> }
      { twitter && <a href={twitter} target="_blank" rel="noreferrer"><img src={twitterSvg} alt="twitter icon"/></a> }
      { facebook && <a href={facebook} target="_blank" rel="noreferrer"><img src={facebookSvg} alt="facebook icon"/></a> }
      { youtube && <a href={youtube} target="_blank" rel="noreferrer"><img src={youtubeSvg} alt="youtube icon"/></a> }
      { instagram && <a href={instagram} target="_blank" rel="noreferrer"><img src={instaSvg} alt="instagram icon"/></a> }
    </div>
  )
}

export default SocialMedia
