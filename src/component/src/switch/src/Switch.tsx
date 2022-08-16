import React from 'react'
import isEqual from 'fast-deep-equal'

interface SwitchProps {
  value: boolean
  label?: string
  onChange: (val: boolean) => void
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { value = false, label = '', onChange } = props

  const handleChange = React.useCallback(
    (e: { target: { checked: boolean } }) => {
      onChange(e.target.checked)
    },
    []
  )

  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        defaultChecked={value}
        className="toggle__button"
        onChange={handleChange}
      />
      <label htmlFor="toggle" className="toggle__switch">
        <div className="toggle__switch--icon"></div>
        {label}
      </label>
    </>
  )
}

export default React.memo(Switch, isEqual)
