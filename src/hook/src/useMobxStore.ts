import { MobXProviderContext } from 'mobx-react'
import { useContext } from 'react'

export const useMobxStore = () => {
  return useContext(MobXProviderContext)
}
