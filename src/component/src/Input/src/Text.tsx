import React from 'react'
import isEqual from 'fast-deep-equal'
import { Path, UseFormRegister } from 'react-hook-form'

interface TextProps {
  type: 'text' | 'password'
  mode: 'edit' | 'primary' | 'error' | 'success'
  inputSize: 'large' | 'medium' | 'small'
  disabled?: boolean
  value?: string
  label: Path<LoginForm>
  register: UseFormRegister<LoginForm> | (() => void)
  required: boolean
}

const Text: React.FC<TextProps> = (props) => {
  const {
    type,
    value,
    mode,
    inputSize,
    disabled = false,
    label,
    register,
    required,
  } = props

  return (
    <input
      type={type}
      className={`input-text__mode--${mode} input-text__size--${inputSize}`}
      disabled={disabled}
      defaultValue={value}
      {...register(label, { required })}
    />
  )
}

export default React.memo(Text, isEqual)
