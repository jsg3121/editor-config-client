import React from 'react'
import isEqual from 'fast-deep-equal'
import { Switch } from '../../..'

interface FormSwitchProps {
  label: string
  defaultValue?: boolean
  onChange: (value: { label: string; value: boolean }) => void
}

const FormSwitch: React.FC<FormSwitchProps> = (props) => {
  const { label, defaultValue = false, onChange } = props

  const handleChange = React.useCallback(
    (value: boolean) => {
      onChange({ label, value })
    },
    [label, onChange]
  )

  return (
    <>
      <p className="form__input--label">{label}</p>
      <Switch onChange={handleChange} value={defaultValue} switchId={label} />
    </>
  )
}

export default React.memo(FormSwitch, isEqual)
