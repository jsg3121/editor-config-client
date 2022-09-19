import React from 'react'
import isEqual from 'fast-deep-equal'
import { Number } from '../../input'

interface FormNumberProps {
  label: string
  defaultValue?: number
  disabled?: boolean
  onChange: (value: { label: string; value: string }) => void
  onHover?: (key: string) => void
}

const FormNumber: React.FC<FormNumberProps> = (props) => {
  const { label, defaultValue = 0, disabled, onChange, onHover } = props

  const handleChange = React.useCallback(
    (value: string) => {
      onChange({ label, value })
    },
    [label, onChange]
  )

  const hadleHover = React.useCallback(() => {
    if (onHover) {
      onHover(label)
    }
  }, [label, onHover])

  return (
    <div onMouseEnter={hadleHover}>
      <p className="form__input--label">{label}</p>
      <Number
        defaultValue={defaultValue}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  )
}

export default React.memo(FormNumber, isEqual)
