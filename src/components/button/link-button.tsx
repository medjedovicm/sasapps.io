import React from 'react'
import { Link } from 'gatsby'

interface Props {
  path: string
  label: string
}

const LinkButton: React.FC<Props> = ({ path, label }: Props) => {
  return (
    <Link className="btn btn-primary" to={path}>
      {label}
    </Link>
  )
}

export default LinkButton
