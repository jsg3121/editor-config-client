import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { formMode } from '../../../../common'
import { Input } from '../../..'
import { useDebounce } from '../../../../hook'
import { AccountService } from '../../../../service'
import Notice from './Notice'

interface FormItemProps<T extends FieldValues> {
  type: 'text' | 'password'
  inputSize: 'large' | 'medium' | 'small'
  name: string
  label: Path<T>
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  errors?: boolean
  isDebounce?: boolean
  pattern?: {
    rule: RegExp
    description: string
  }
  register?: UseFormRegister<T>
}

interface Mode {
  type: 'edit' | 'primary' | 'error' | 'success'
  description?: string
}

const FormItem = <T extends FieldValues>(props: FormItemProps<T>) => {
  const {
    name,
    isDebounce,
    errors,
    pattern,
    disabled,
    label,
    defaultValue,
    ...rest
  } = props
  const [inputStatus, setInputStatus] = React.useState<Mode>({
    type: 'primary',
  })

  const [keyword, debounce] = useDebounce()
  const { mutate } = useMutation(AccountService.validCheck, {
    onSuccess(data) {
      setInputStatus(formMode(data))
    },
  })

  const handleChange = React.useCallback(
    (str: string) => {
      if (str === '') {
        setInputStatus({ type: 'primary' })
      } else {
        if (pattern) {
          if (pattern.rule.test(str) === false) {
            setInputStatus({ type: 'error', description: pattern.description })
          } else {
            setInputStatus({ type: 'primary' })
          }
        }
        if (isDebounce) {
          debounce(str)
        }
      }
    },
    [debounce, isDebounce, pattern]
  )

  React.useEffect(() => {
    if (keyword !== '') {
      if (!pattern) {
        mutate({ value: keyword, type: label })
      } else {
        if (pattern.rule.test(keyword)) {
          mutate({ value: keyword, type: label })
        }
      }
    }
  }, [keyword, label, mutate, pattern])

  React.useEffect(() => {
    if (errors) {
      setInputStatus(formMode(errors))
    }
  }, [errors])

  return (
    <div className={`form__input-box input__status--${inputStatus.type}`}>
      <p className="form__input--label">{name}</p>
      <Input.Text
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={handleChange}
        label={label}
        mode={inputStatus.type}
        {...rest}
      />
      <Notice mode={inputStatus} />
    </div>
  )
}

export default FormItem
