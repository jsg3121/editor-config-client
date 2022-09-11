import React from 'react'
import isEqual from 'fast-deep-equal'
import '../../../../style/dashboard.scss'

const DashBoard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__config-list"></div>
      <div className="dashboard__recently-config"></div>
      <div className="dashboard__most-useful"></div>
      <div className="dashboard__chart"></div>
    </div>
  )
}

export default React.memo(DashBoard, isEqual)
