import isEqual from 'fast-deep-equal'
import React from 'react'
import { Header } from '../../../../container'

const Main: React.FC = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default React.memo(Main, isEqual)
