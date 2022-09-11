import isEqual from 'fast-deep-equal'
import React from 'react'
import SelectOption from './SelectOption'

interface SelectProps {
  options: Array<string>
  placeholder: string
  value?: string
  disabled?: boolean
  onSelect: (val: string) => void
}

const Select: React.FC<SelectProps> = (props) => {
  const {
    options = [],
    placeholder = 'select',
    value = '',
    disabled = false,
    onSelect,
  } = props
  const [isSelect, setIsSelect] = React.useState<boolean>(false)
  const [selectVal, setSelectVal] = React.useState<string>(value)

  const handleClick = React.useCallback(() => {
    setIsSelect((isSelect) => !isSelect)
  }, [])

  const handleSelect = React.useCallback(
    (val: string) => {
      setSelectVal(val)
      setIsSelect(false)
      onSelect(val)
    },
    [onSelect]
  )

  return (
    <div className={['select', disabled ? 'select--disabled' : ''].join(' ')}>
      <div className="select__input" onClick={handleClick}>
        <p className="select__input--value">
          {selectVal ? selectVal : placeholder}
        </p>
        <i className="select__input--icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
          </svg>
        </i>
      </div>
      {isSelect && (
        <div className="select__option">
          <ul>
            {options.map((item, index) => {
              return (
                <SelectOption
                  value={item}
                  key={index}
                  onSelect={handleSelect}
                />
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default React.memo(Select, isEqual)
