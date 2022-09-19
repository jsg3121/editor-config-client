import isEqual from 'fast-deep-equal'
import React from 'react'
import { Select } from '../../..'

interface FormSelectProps {
  label: string
  options: Array<string>
  defaultValue?: string
  onSelect: (value: { label: string; value: string }) => void
  onHover?: (key: string) => void
}

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { defaultValue = '-', label, options, onSelect, onHover } = props

  const handleSelect = React.useCallback(
    (value: string) => {
      onSelect({ label, value })
    },
    [label, onSelect]
  )

  const hadleHover = React.useCallback(() => {
    if (onHover) {
      onHover(label)
    }
  }, [label, onHover])

  return (
    <div onMouseEnter={hadleHover}>
      <p className="form__input--label">{label}</p>
      <Select
        onSelect={handleSelect}
        placeholder={defaultValue}
        options={options}
      />
    </div>
  )
}

export default React.memo(FormSelect, isEqual)
