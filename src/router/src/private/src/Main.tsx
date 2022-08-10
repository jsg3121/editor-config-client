import React from 'react'
import isEqual from 'fast-deep-equal'

const Main: React.FC = () => {
  return <>메인</>
}

export default React.memo(Main, isEqual)
