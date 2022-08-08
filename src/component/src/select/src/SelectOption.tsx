import React from 'react'
import isEqual from 'fast-deep-equal'

interface SelectOptionProps {
  value: string
  onSelect: (val: string) => void
}

const SelectOption: React.FC<SelectOptionProps> = (props) => {
  const { value, onSelect } = props

  const handleClick = React.useCallback(() => {
    onSelect(value)
  }, [])

  return (
    <li className="select__option--item" onClick={handleClick}>
      <p>{value}</p>
    </li>
  )
}

export default React.memo(SelectOption, isEqual)
