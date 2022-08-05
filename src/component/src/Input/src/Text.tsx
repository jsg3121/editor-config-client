import React from 'react'
import isEqual from 'fast-deep-equal'

interface TextProps {
  type: 'text' | 'password'
  mode: 'edit' | 'primary' | 'error' | 'success'
  inputSize: 'large' | 'medium' | 'small'
  disabled?: boolean
  value?: string
}

const Text: React.FC<TextProps> = (props) => {
  const { type, value, mode, inputSize, disabled = false } = props

  return (
    <input
      type={type}
      className={`input-text__mode--${mode} input-text__size--${inputSize}`}
      disabled={disabled}
      defaultValue={value}
    />
  )
}

export default React.memo(Text, isEqual)
