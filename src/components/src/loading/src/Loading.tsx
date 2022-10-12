import React from 'react'
import isEqual from 'fast-deep-equal'
import '../../../../style/loading.scss'

const Loading: React.FC = () => {
  return (
    <div className="loading__container">
      <div className="loading__content"></div>
    </div>
  )
}

export default React.memo(Loading, isEqual)
