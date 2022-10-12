import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react'
import React from 'react'
import { useMobxStore } from '../../hook'
import { ConfigInfoService } from '../../service'
import { useSelector } from '../../store'

interface BoardContextProps {
  children: React.ReactNode
}

type ContextType = {
  configList?: ConfigTypes.ResponseConfigList['data']
  isLoading?: boolean
}

export const BoardContext = React.createContext<ContextType>({})

export const BoardProvider: React.FC<BoardContextProps> = observer((props) => {
  const { children } = props
  const { accessToken, id } = useSelector((store) => store.account)
  const { config } = useMobxStore()

  const { data: configList, isLoading } = useQuery(
    ['/api/config/file'],
    async () => {
      const result = await ConfigInfoService.getConfigList(id, accessToken)
      return result.data
    }
  )

  React.useEffect(() => {
    config.clear()
  }, [config])

  const initialValue = {
    configList,
    isLoading,
  }

  return (
    <BoardContext.Provider value={initialValue}>
      {children}
    </BoardContext.Provider>
  )
})
