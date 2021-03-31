import React from 'react'

interface Props {
  type: 'button' | 'submit' | 'reset'
  label: string
}

const Button: React.FC<Props> = ({ type, label }: Props) => {
  return (
    <button type={type} className="btn btn-primary">
      {label}
    </button>
  )
}

export default Button
