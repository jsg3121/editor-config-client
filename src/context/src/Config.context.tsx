import { UseMutateFunction, useMutation, useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react'
import { createContext, useCallback, useEffect } from 'react'
import { useMobxStore } from '../../hook'
import { ConfigStore } from '../../mobxStore'
import { ConfigInfoService } from '../../service'

interface ConfigProviderProps {
  children: React.ReactNode
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
  config?: ConfigStore
  selectDescription?: (val: keyof ConfigTypes.IDetailes) => void
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
    const { mutate, isLoading } = useMutation(
      ConfigInfoService.createConfigInfo
    )
    const { config } = useMobxStore()

    const selectDescription = useCallback(
      (val: keyof ConfigTypes.IDetailes) => {
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
