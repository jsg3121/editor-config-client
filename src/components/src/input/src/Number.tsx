import isEqual from 'fast-deep-equal'
import { ChangeEvent, memo, useCallback, WheelEvent } from 'react'

interface NumberProps {
  defaultValue: number
  disabled?: boolean
  onChange: (value: string) => void
}

const Number: React.FC<NumberProps> = (props) => {
  const { disabled = false, defaultValue, onChange } = props

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value)
      }
    },
    [onChange]
  )

  const handleWheel = useCallback((e: WheelEvent<HTMLInputElement>) => {
    e.currentTarget.blur()
  }, [])

  return (
    <input
      onWheel={handleWheel}
      type="number"
      className={`input-text__mode--primary input-text__size--large`}
      disabled={disabled}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  )
}

export default memo(Number, isEqual)
