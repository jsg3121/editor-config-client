import { UseMutateFunction, useMutation, useQuery } from '@tanstack/react-query'
import { createContext, useEffect } from 'react'
import { useMobxStore } from '../../hook'
import { ConfigStore } from '../../mobxStore'
import { ConfigInfoService } from '../../service'

interface ConfigProviderProps {
  children: React.ReactNode
}

type test = {
  data?: ConfigTypes.ConfigDataType
  mutate?: UseMutateFunction<
    any,
    unknown,
    ConfigTypes.RequestConfigType,
    unknown
  >
  isLoading?: boolean
  config?: ConfigStore
}

export const ConfigContext = createContext<test>({
  data: {
    Description: {},
    Options: {},
  },
})

export const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children } = props
  const { data } = useQuery([`info/config`], ConfigInfoService.getConfigInfo)
  const { mutate, isLoading } = useMutation(ConfigInfoService.patchConfigInfo)
  const { config } = useMobxStore()

  useEffect(() => {
    if (data) {
      config.initConfig(data.Options)
    }
  }, [config, data])

  const initialValue = {
    data,
    mutate,
    isLoading,
    config,
  }

  return (
    <ConfigContext.Provider value={initialValue}>
      {children}
    </ConfigContext.Provider>
  )
}
