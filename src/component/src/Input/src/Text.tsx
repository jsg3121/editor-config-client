import { Path, UseFormRegister } from 'react-hook-form'
import { useCallback } from 'react'

interface TextProps<T> {
  type: 'text' | 'password'
  mode: 'edit' | 'primary' | 'error' | 'success'
  inputSize: 'large' | 'medium' | 'small'
  disabled?: boolean
  value?: string
  label: Path<T>
  required: boolean
  register: UseFormRegister<T> | (() => void)
  onChange?: (val: string, type: Path<T> | string) => void
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
      onChange(e.target.value, label)
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
