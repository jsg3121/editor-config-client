import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface InputTextProps {
  mode: 'Edit' | 'Primary' | 'Disabled' | 'Error' | 'Success'
  inputSize: 'large' | 'medium' | 'small'
  value?: string
}

const InputText: React.FC<InputTextProps> = (props) => {
  const { value, mode, inputSize } = props

  return <input type="text" className="" />
}

export default React.memo(InputText, isEqual)
