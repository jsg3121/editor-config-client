import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { useDebounce } from '../../../../hook'
import { Input } from '../../input'

interface FormItemProps<T> {
  type: 'text' | 'password'
  mode: 'edit' | 'primary' | 'error' | 'success'
  inputSize: 'large' | 'medium' | 'small'
  name: string
  label: Path<T>
  required: boolean
  register: UseFormRegister<T>
  onValid?: (val: string, type: string) => void
}

const FormItem = <T extends unknown>(props: FormItemProps<T>) => {
  const { onValid, name, mode, label, ...rest } = props
  const [keyword, debounce] = useDebounce()

  const handleChange = React.useCallback((str: string) => {
    debounce(str)
  }, [])

  React.useEffect(() => {
    if (onValid && keyword !== '') {
      onValid(keyword, label)
    }
  }, [keyword])

  return (
    <div className="form__input-box">
      <p className={[`form__input--label`, `text--${mode}`].join(' ')}>
        {name}
      </p>
      <Input.Text onChange={handleChange} label={label} mode={mode} {...rest} />
      {mode === 'error' && (
        <span className="form__input--error">
          입력 형식이 올바르지 않습니다
        </span>
      )}
    </div>
  )
}

export default FormItem
