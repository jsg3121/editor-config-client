import { MobXProviderContext } from 'mobx-react'
import React, { useContext } from 'react'
import { RootStore } from '../../mobxStore'

/**
 * info : 컴포넌트 함수 내에서 useMobxStore 호출 시 생성한 Mobx의 store가 나오지 않아 중간에 생성한 store의 타입 추가
 * @returns
 */
const useCustomContext = <T>() => {
  const mobXProvider = MobXProviderContext as React.Context<T>
  return useContext(mobXProvider)
}

export const useMobxStore = () => {
  return useCustomContext<RootStore>()
}
