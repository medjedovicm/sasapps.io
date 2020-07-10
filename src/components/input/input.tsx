import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

interface Props {
  label: string
  name: string
  placeholder: string
  vertical: boolean
  textarea: boolean
}

const Input: React.FC<Props> = ({ label, name, placeholder, vertical, textarea }: Props) => {
  if (textarea){
    return (
      <label className={vertical ? "vertical" : ""}>
        {label}
        <textarea name={name} placeholder={placeholder} rows={3}/>
      </label>
      )
  }
  return (
    <label className={vertical ? "vertical" : ""}>
      {label}
      <input type="text" name={name} placeholder={placeholder} />
    </label>
  )
}

export default Input
