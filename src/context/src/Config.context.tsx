import { UseMutateFunction, useMutation, useQuery } from '@tanstack/react-query'
import { createContext, useCallback, useEffect, useState } from 'react'
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
  description?: {
    desc: string
    value: {
      [k in string]: string
    }
  }
  selectDescription?: (val: keyof ConfigTypes.IDetailes) => void
}

export const ConfigContext = createContext<ContextType>({
  data: {
    Description: {},
    Options: {},
  },
})

export const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children } = props
  const [description, setDescription] = useState<ContextType['description']>()
  const { data } = useQuery([`info/config`], ConfigInfoService.getConfigInfo)
  const { mutate, isLoading } = useMutation(ConfigInfoService.patchConfigInfo)
  const { config } = useMobxStore()

  useEffect(() => {
    if (data) {
      config.initConfig(data.Options)
    }
  }, [config, data])

  const selectDescription = useCallback(
    (val: keyof ConfigTypes.IDetailes) => {
      if (data) {
        const desc = data.Description[val]?.desc || ''
        const value = data.Description[val]?.value || ''
        setDescription({ desc, value: { ...value } })
      }
    },
    [data]
  )

  const initialValue = {
    data,
    isLoading,
    config,
    description,
    mutate,
    selectDescription,
  }

  return (
    <ConfigContext.Provider value={initialValue}>
      {children}
    </ConfigContext.Provider>
  )
}
