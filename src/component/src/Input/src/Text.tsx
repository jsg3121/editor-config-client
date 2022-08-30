import { useCallback } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

interface TextProps<T> {
  type: 'text' | 'password'
  mode: 'edit' | 'primary' | 'error' | 'success'
  inputSize: 'large' | 'medium' | 'small'
  label: Path<T>
  required: boolean
  disabled?: boolean
  value?: string
  register: UseFormRegister<T> | (() => void)
  onChange?: (val: string) => void
}

export const Text = <T extends unknown>(props: TextProps<T>) => {
  const {
    type,
    value,
    mode,
    inputSize,
    disabled = false,
    label,
    required,
    register,
    onChange,
  } = props

  const handleChange = useCallback((e: { target: { value: string } }) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }, [])

  return (
    <input
      type={type}
      className={`input-text__mode--${mode} input-text__size--${inputSize}`}
      disabled={disabled}
      defaultValue={value}
      {...register(label, { required })}
      onChange={handleChange}
    />
  )
}
