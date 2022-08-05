import React from 'react'
import isEqual from 'fast-deep-equal'
import { Input } from '../../../../component'

const Login: React.FC = () => {
  return (
    <>
      <Input.Text type="text" inputSize="medium" mode="primary" />
    </>
  )
}

export default React.memo(Login, isEqual)
