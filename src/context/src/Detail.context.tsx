import { UseMutateFunction, useMutation, useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react'
import { createContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMobxStore } from '../../hook'
import { ConfigInfoService } from '../../service'
import { useSelector } from '../../store'

interface DetailProviderProps {
  children: React.ReactNode
}

type RouteParams = {
  id: string
}

type ContextType = {
  userId: number
  id: number | string
  accessToken: string
  data?: ConfigTypes.DetailDataType
  isSuccess?: boolean
  mutate?: UseMutateFunction<
    any,
    unknown,
    ConfigTypes.RequestDeleteConfig,
    unknown
  >
}

export const DetailContext = createContext<ContextType>({
  id: 0,
  userId: 0,
  accessToken: '',
})

export const DetailProvider: React.FC<DetailProviderProps> = observer(
  (props) => {
    const { children } = props
    const { id } = useParams<RouteParams>()
    const { accessToken, id: userId } = useSelector((store) => store.account)
    const { config } = useMobxStore()
    const { data } = useQuery<ConfigTypes.DetailDataType>(
      [`/detail/${id}`],
      async () => {
        const result = await ConfigInfoService.getDetailConfig(id, accessToken)

        return {
          configName: result.data.configName,
          configType: result.data.configType,
          configDetail: JSON.parse(result.data.configDetail),
          createDate: result.data.createDate,
        }
      }
    )

    const { mutate, isSuccess } = useMutation(
      ConfigInfoService.deleteDetailConfig
    )

    useEffect(() => {
      if (data) {
        config.initSelectDetail(data)
      }
    }, [config, data])

    const initialValue = {
      id,
      data,
      userId,
      isSuccess,
      accessToken,
      mutate,
    }

    return (
      <DetailContext.Provider value={initialValue}>
        {children}
      </DetailContext.Provider>
    )
  }
)
