import React from 'react'
import isEqual from 'fast-deep-equal'
import { Provider } from 'mobx-react'
import { ConfigStore } from './configInfo'

interface MobxProviderProps {
  children: React.ReactNode
}

const config = new ConfigStore()

const MobxProvider: React.FC<MobxProviderProps> = (props) => {
  const { children } = props

  return <Provider config={config}>{children}</Provider>
}

export default React.memo(MobxProvider, isEqual)
