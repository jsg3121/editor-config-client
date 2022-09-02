import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { formMode } from '../../../../common'
import { Form, Input } from '../../../../component'
import { useDebounce } from '../../../../hook'
import { AccountService } from '../../../../service'

interface FormItemProps<T> {
  type: 'text' | 'password'
  inputSize: 'large' | 'medium' | 'small'
  name: string
  label: Path<T>
  required: boolean
  errors?: boolean
  isDebounce?: boolean
  pattern?: {
    rule: RegExp
    description: string
  }
  register: UseFormRegister<T>
  onValid?: (val: string, type: string) => void
}

interface Mode {
  type: 'edit' | 'primary' | 'error' | 'success'
  description?: string
}

const FormItem = <T extends unknown>(props: FormItemProps<T>) => {
  const { onValid, name, isDebounce, errors, pattern, label, ...rest } = props
  const [inputStatus, setInputStatus] = React.useState<Mode>({
    type: 'primary',
  })

  const [keyword, debounce] = useDebounce()
  const { mutate } = useMutation(AccountService.validCheck, {
    onSuccess(data) {
      setInputStatus(formMode(data))
    },
  })

  const handleChange = React.useCallback((str: string) => {
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
  }, [])

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
  }, [keyword])

  React.useEffect(() => {
    if (errors) {
      setInputStatus(formMode(errors))
    }
  }, [errors])

  return (
    <div className={`form__input-box input__status--${inputStatus.type}`}>
      <p className="form__input--label">{name}</p>
      <Input.Text
        onChange={handleChange}
        label={label}
        mode={inputStatus.type}
        {...rest}
      />
      <Form.Notice mode={inputStatus} />
    </div>
  )
}

export default FormItem