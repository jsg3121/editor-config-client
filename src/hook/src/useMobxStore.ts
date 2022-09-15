import { MobXProviderContext } from 'mobx-react'
import React, { useContext } from 'react'
import { RootStore } from '../../mobxStore'

const useCustomContext = <T>() => {
  const mobXProvider = MobXProviderContext as React.Context<T>
  return useContext(mobXProvider)
}

export const useMobxStore = () => {
  return useCustomContext<RootStore>()
}
