import isEqual from 'fast-deep-equal'
import React from 'react'
import { DashBoard, GNB } from '../../../../container'

const Main: React.FC = () => {
  return (
    <div className="w-screen h-screen pt-14 bg-gradient-to-b from-primary-700 to-primary-900 relative ">
      <GNB />
      <DashBoard />
    </div>
  )
}

export default React.memo(Main, isEqual)
