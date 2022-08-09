import React from 'react'
import isEqual from 'fast-deep-equal'

interface ButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick, disabled } = props

  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick()
    }
  }, [])

  return (
    <>
      <button className="button" onClick={handleClick}>
        {label}
      </button>
    </>
  )
}

export default React.memo(Button, isEqual)
