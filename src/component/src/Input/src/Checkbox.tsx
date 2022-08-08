import React from 'react'
import isEqual from 'fast-deep-equal'

interface ChekboxProps {
  label: string
  value: string
  disabled?: boolean
  checked?: boolean
  onChange: (val: boolean) => void
}

const CheckSVG = () => (
  <svg width="20px" height="20px" viewBox="0 0 20 20">
    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
    <polyline points="4 11 8 15 16 6"></polyline>
  </svg>
)

const Checkbox: React.FC<ChekboxProps> = (props) => {
  const { value, label, disabled = false, checked = false, onChange } = props

  const handleChange = React.useCallback(
    (e: { target: { checked: boolean } }) => {
      onChange(e.target.checked)
    },
    []
  )

  return (
    <div
      className={[
        'input-checkbox',
        disabled ? 'input-checkbox--disabled' : '',
      ].join(' ')}
    >
      <input
        id={value}
        type="checkbox"
        className="input-checkbox__checked"
        defaultChecked={checked}
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={value} className={'input-checkbox__label'}>
        <div>
          <CheckSVG />
        </div>
        {label}
      </label>
    </div>
  )
}

export default React.memo(Checkbox, isEqual)
