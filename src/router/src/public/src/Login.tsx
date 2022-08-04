import React from 'react'
import isEqual from 'fast-deep-equal'
import { InputText } from '../../../../component'

const Login: React.FC = () => {
  return (
    <>
      <InputText inputSize="medium" mode="Primary" type="form" />
    </>
  )
}

export default React.memo(Login, isEqual)
