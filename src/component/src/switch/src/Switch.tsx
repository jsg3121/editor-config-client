import React from 'react'
import isEqual from 'fast-deep-equal'

interface SwitchProps {
  value: boolean
  label?: string
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { value = false, label = '' } = props

  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        defaultChecked={value}
        className="toggle__button"
      />
      <label htmlFor="toggle" className="toggle__switch">
        <div className="toggle__switch--icon"></div>
        {label}
      </label>
    </>
  )
}

export default React.memo(Switch, isEqual)
