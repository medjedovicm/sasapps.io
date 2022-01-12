import React from 'react'
import { Link } from 'gatsby'

interface Props {
  path: string
  label: string
  active?: boolean
}

const LinkButton: React.FC<Props> = ({ path, label, active }: Props) => {
  const classname = active ? 'active' : ''
  return (
    <Link className={`btn btn-primary ${classname}`} to={path}>
      {label}
    </Link>
  )
}

export default LinkButton
