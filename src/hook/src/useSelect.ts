import React from 'react'

type UseSelect = (
  ref: React.RefObject<HTMLDivElement> | null
) => [boolean, () => void]

/**
 * info : select option이 열려있는 상태에서 다른 영역을 클릭할 때 열려있는 option을 닫음
 * @param ref 선택한 옵션의 dom ref
 * @returns
 */
export const useSelect: UseSelect = (ref) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (ref) {
      const dom = ref.current
      window.addEventListener('click', (e) => {
        if (dom && isOpen && (!dom || !dom.contains(e.target as Node))) {
          setIsOpen(() => false)
        }
      })

      return () =>
        window.removeEventListener('click', (e) => {
          if (dom && isOpen && (!dom || !dom.contains(e.target as Node))) {
            setIsOpen(() => false)
          }
        })
    }
  }, [isOpen, ref])

  const handleSelect = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  return [isOpen, handleSelect]
}
