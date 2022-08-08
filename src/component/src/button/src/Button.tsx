import React from 'react'
import isEqual from 'fast-deep-equal'

interface ButtonProps {
  label: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick } = props

  const handleClick = React.useCallback(() => {
    onClick()
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
