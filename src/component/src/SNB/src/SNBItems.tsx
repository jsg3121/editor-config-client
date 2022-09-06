import React from 'react'
import isEqual from 'fast-deep-equal'
import { ReactComponent as ArrowIcon } from '../../../../assets/images/arrow.svg'

interface SNBItemsProps {
  label: string
  subItems?: Array<{ label: string; url: string }>
  onRoute?: (route: string) => void
}

const SNBItems: React.FC<SNBItemsProps> = (props) => {
  const { subItems, label, onRoute } = props

  const [isSub, setIsSub] = React.useState<boolean>(false)

  const handleClick = React.useCallback(() => {
    if (subItems) {
      setIsSub((isSub) => !isSub)
    }
  }, [])

  const handleRoute = React.useCallback((val: string) => {
    return () => {
      if (onRoute) {
        onRoute(val)
      }
    }
  }, [])

  return (
    <>
      <li className="menu__sub--item">
        <div className="menu__sub--title" onClick={handleClick}>
          <p>{label}</p>
          {subItems && <ArrowIcon width={10} height={10} fill="#e7e7e7" />}
        </div>
        {isSub && (
          <ul>
            {subItems?.map((item, index) => {
              return (
                <li
                  className="munu__sub--content"
                  key={index}
                  onClick={handleRoute(item.url)}
                >
                  <p>{item.label}</p>
                </li>
              )
            })}
          </ul>
        )}
      </li>
    </>
  )
}

export default React.memo(SNBItems, isEqual)
