import React from 'react'
import isEqual from 'fast-deep-equal'
import { Number } from '../../../../component/src/input'

interface FormNumberProps {
  label: string
  defaultValue?: string
  onChange: (value: string) => void
  disabled?: boolean
}

const FormNumber: React.FC<FormNumberProps> = (props) => {
  const { label, defaultValue = '', disabled, onChange } = props

  return (
    <>
      <p className="form__input--label">{label}</p>
      <Number
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  )
}

export default React.memo(FormNumber, isEqual)
