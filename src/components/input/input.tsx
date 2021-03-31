import React from 'react'

interface Props {
  label: string
  name: string
  placeholder: string
  vertical: boolean
  textarea: boolean
  rules: string
}

const Input: React.FC<Props> = ({
  label,
  name,
  placeholder,
  vertical,
  textarea,
  rules,
}: Props) => {
  if (textarea) {
    return (
      <label className={vertical ? 'vertical' : ''} htmlFor={name}>
        {label}
        <textarea
          name={name}
          placeholder={placeholder}
          rows={3}
          rules={rules}
        />
      </label>
    )
  }
  return (
    <label className={vertical ? 'vertical' : ''} htmlFor={name}>
      {label}
      <input type="text" name={name} placeholder={placeholder} rules={rules} />
    </label>
  )
}

export default Input
