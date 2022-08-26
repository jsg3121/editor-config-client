import { useEffect, useState } from 'react'
import { Dispatch, useDispatch } from '../../store'

type DebounceType = (str: string, type: string) => void

type UseDebounce = () => [string, DebounceType]

const useDebounce: UseDebounce = () => {
  const [value, setValue] = useState<string>('')
  const [keyword, setKeyword] = useState<string>('')

  const debounce: DebounceType = (str, type) => {
    setValue(str)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      return setKeyword(value)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [value])

  return [keyword, debounce]
}

export default useDebounce
