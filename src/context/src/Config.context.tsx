import { UseMutateFunction, useMutation, useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react'
import { createContext, useCallback, useEffect } from 'react'
import { useMobxStore } from '../../hook'
import { ConfigStore } from '../../mobxStore'
import { ConfigInfoService } from '../../service'

interface ConfigProviderProps {
  children: React.ReactNode
  data?: ConfigTypes.DetailDataType
}

type ContextType = {
  data?: ConfigTypes.ConfigDataType
  mutate?: UseMutateFunction<
    any,
    unknown,
    ConfigTypes.RequestConfigType,
    unknown
  >
  isLoading?: boolean
  isSuccess?: boolean
  config?: ConfigStore
  selectDescription?: (val: keyof ConfigTypes.IDetails) => void
}

export const ConfigContext = createContext<ContextType>({
  data: {
    Description: {},
    Options: {},
  },
})

export const ConfigProvider: React.FC<ConfigProviderProps> = observer(
  (props) => {
    const { children } = props
    const { data } = useQuery([`info/config`], ConfigInfoService.getConfigInfo)
    const { config } = useMobxStore()

    const { mutate, isLoading, isSuccess } = useMutation(
      ConfigInfoService.createConfigInfo
    )

    const selectDescription = useCallback(
      (val: keyof ConfigTypes.IDetails) => {
        config.description(val)
      },
      [config]
    )

    useEffect(() => {
      if (data) {
        config.initConfig(data)
      }
    }, [config, data])

    const initialValue = {
      data,
      isLoading,
      isSuccess,
      config,
      mutate,
      selectDescription,
    }

    return (
      <ConfigContext.Provider value={initialValue}>
        {children}
      </ConfigContext.Provider>
    )
  }
)
