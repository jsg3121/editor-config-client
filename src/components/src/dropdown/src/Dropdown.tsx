import React from 'react'
import isEqual from 'fast-deep-equal'

interface DropdownProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  children: React.ReactNode
  options: Array<{
    key: number | string
    label: React.ReactNode
  }>
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { className = '', children, options } = props

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleClick = React.useCallback(() => {
    setIsOpen((open) => !open)
  }, [])

  return (
    <div className={`dropdown ${className}`} onClick={handleClick}>
      {children}
      {isOpen && (
        <div className="dropdown__options">
          {options.map(({ label, key }) => {
            return (
              <div className="options__items" key={key}>
                {label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default React.memo(Dropdown, isEqual)
