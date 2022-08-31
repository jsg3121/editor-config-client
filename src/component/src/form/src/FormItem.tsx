import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { useDebounce } from '../../../../hook'
import { Input } from '../../input'

interface FormItemProps<T> {
  type: 'text' | 'password'
  mode: {
    type: 'edit' | 'primary' | 'error' | 'success'
    description?: string
  }
  inputSize: 'large' | 'medium' | 'small'
  name: string
  label: Path<T>
  required: boolean
  isDebounce?: boolean
  pattern?: {
    rule: RegExp
    description: string
  }
  register: UseFormRegister<T>
  onValid?: (val: string, type: string) => void
}

const FormItem = <T extends unknown>(props: FormItemProps<T>) => {
  const { onValid, name, mode, isDebounce, pattern, label, ...rest } = props
  const [keyword, debounce] = useDebounce()
  const handleChange = React.useCallback((str: string) => {
    if (isDebounce) {
      debounce(str)
    }
  }, [])

  React.useEffect(() => {
    if (onValid && keyword !== '') {
      onValid(keyword, label)
    }
  }, [keyword])

  return (
    <div className="form__input-box">
      <p className={[`form__input--label`, `text--${mode.type}`].join(' ')}>
        {name}
      </p>
      <Input.Text
        onChange={handleChange}
        label={label}
        mode={mode.type}
        {...rest}
      />
      {mode.type === 'success' && (
        <span className="form__input--success">사용 가능한 {name} 입니다</span>
      )}
      {mode.type === 'error' && (
        <span className="form__input--error">
          입력 형식이 올바르지 않습니다
        </span>
      )}
    </div>
  )
}

export default FormItem
