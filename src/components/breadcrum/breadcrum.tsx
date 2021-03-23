import React from 'react'
import { Link } from 'gatsby'

import arrowRightSvg from '../../../assets/arrow-right.svg'

interface NavLink {
  label: string
  to: string
}

interface Props {
  links: NavLink[]
}

const Breadcrum: React.FC<Props> = ({ links }: Props) => {
  return (
    <div className="container breadcrum">
      {links.map((link, i) => {
        if (i == 0)
          return (
            <div key={i}>
              <Link className="text-center" to={link.to}>
                {link.label}
              </Link>
            </div>
          )
        return (
          <div key={i}>
            <img src={arrowRightSvg} alt="right arrow icon" />
            <Link className="text-center" to={link.to}>
              {link.label}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrum
