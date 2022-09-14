import React from 'react'
import isEqual from 'fast-deep-equal'
import { Switch } from '../../../../component'

interface FormSwitchProps {
  label: string
  defaultValue?: boolean
  onChange: (value: boolean) => void
}

const FormSwitch: React.FC<FormSwitchProps> = (props) => {
  const { label, defaultValue = false, onChange } = props

  return (
    <>
      <p className="form__input--label">{label}</p>
      <Switch onChange={onChange} value={defaultValue} switchId={label} />
    </>
  )
}

export default React.memo(FormSwitch, isEqual)
