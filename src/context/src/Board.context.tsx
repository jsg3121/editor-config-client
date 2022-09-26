import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react'
import React from 'react'
import { ConfigInfoService } from '../../service'
import { useSelector } from '../../store'

interface BoardContextProps {
  children: React.ReactNode
}

type ContextType = {
  configList?: ConfigTypes.ResponseConfigList['data']
}

export const BoardContext = React.createContext<ContextType>({})

export const BoardProvider: React.FC<BoardContextProps> = observer((props) => {
  const { children } = props
  const { accessToken, id } = useSelector((store) => store.account)

  const { data: configList } = useQuery(['/api/config/file'], async () => {
    const result = await ConfigInfoService.getConfigList(id, accessToken)
    return result.data
  })

  const initialValue = {
    configList,
  }

  return (
    <BoardContext.Provider value={initialValue}>
      {children}
    </BoardContext.Provider>
  )
})
