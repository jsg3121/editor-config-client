import React from 'react'
import isEqual from 'fast-deep-equal'
import { Switch } from '../../..'

interface FormSwitchProps {
  label: string
  defaultValue?: boolean
  onChange: (value: { label: string; value: boolean }) => void
  onHover?: (key: string) => void
}

const FormSwitch: React.FC<FormSwitchProps> = (props) => {
  const { label, defaultValue = false, onChange, onHover } = props

  const handleChange = React.useCallback(
    (value: boolean) => {
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
      <Switch onChange={handleChange} value={defaultValue} switchId={label} />
    </div>
  )
}

export default React.memo(FormSwitch, isEqual)
