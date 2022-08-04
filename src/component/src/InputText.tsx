import React from 'react'
import isEqual from 'fast-deep-equal'

interface InputTextProps {
  type: 'form' | 'input'
  mode: 'Edit' | 'Primary' | 'Disabled' | 'Error' | 'Success'
  inputSize: 'large' | 'medium' | 'small'
  value?: string
}

const InputText: React.FC<InputTextProps> = (props) => {
  const { type, value, mode, inputSize } = props
  const [style, setStyle] = React.useState<string>()

  React.useEffect(() => {
    if (type === 'input') {
    }
  }, [])

  return (
    <input type="text" className="input__size--large input__mode--primary" />
  )
}

export default React.memo(InputText, isEqual)
