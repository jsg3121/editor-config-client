import React from 'react'
import isEqual from 'fast-deep-equal'
import { Number } from '../../../../component/src/input'

interface FormNumberProps {
  label: string
  defaultValue?: string
  disabled?: boolean
  onChange: (value: { label: string; value: string }) => void
}

const FormNumber: React.FC<FormNumberProps> = (props) => {
  const { label, defaultValue = '', disabled, onChange } = props

  const handleChange = React.useCallback(
    (value: string) => {
      onChange({ label, value })
    },
    [label, onChange]
  )

  return (
    <>
      <p className="form__input--label">{label}</p>
      <Number
        defaultValue={defaultValue}
        onChange={handleChange}
        disabled={disabled}
      />
    </>
  )
}

export default React.memo(FormNumber, isEqual)
