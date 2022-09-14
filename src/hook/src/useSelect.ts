import React from 'react'

type UseSelect = (
  ref: React.RefObject<HTMLDivElement> | null
) => [boolean, () => void]

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
