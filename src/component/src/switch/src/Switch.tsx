import React from 'react'
import isEqual from 'fast-deep-equal'

interface SwitchProps {
  value: boolean
  switchId: string
  label?: string
  onChange: (val: boolean) => void
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { value = false, switchId, label = '', onChange } = props

  const handleChange = React.useCallback(
    (e: { target: { checked: boolean } }) => {
      onChange(e.target.checked)
    },
    [onChange]
  )

  return (
    <>
      <input
        type="checkbox"
        id={switchId}
        defaultChecked={value}
        className="toggle__button"
        onChange={handleChange}
      />
      <label htmlFor={switchId} className="toggle__switch">
        <div className="toggle__switch--icon"></div>
        {label}
      </label>
    </>
  )
}

export default React.memo(Switch, isEqual)
