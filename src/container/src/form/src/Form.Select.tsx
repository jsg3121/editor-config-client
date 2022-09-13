import isEqual from 'fast-deep-equal'
import React from 'react'
import { Select } from '../../../../component'

interface FormSelectProps {
  label: string
  options: Array<string>
  defaultValue?: string
  onSelect: (value: string) => void
}

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { defaultValue = '-', label, options, onSelect } = props

  const handleSelect = React.useCallback(
    (value: string) => {
      onSelect(value)
    },
    [onSelect]
  )

  return (
    <>
      <p className="form__input--label">{label}</p>
      <Select
        onSelect={handleSelect}
        placeholder={defaultValue}
        options={options}
      />
    </>
  )
}

export default React.memo(FormSelect, isEqual)
