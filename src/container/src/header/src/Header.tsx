import React from 'react'
import isEqual from 'fast-deep-equal'
import '../../../../style/header.scss'
import { Button } from '../../../../component'
import { Actions, useDispatch, useSelector } from '../../../../store'

const Header: React.FC = () => {
  const { name, accessToken } = useSelector((store) => store.account)

  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    dispatch(Actions.account.logout(accessToken))
  }, [])

  return (
    <header className="header">
      <div className="header__logo">
        <h1>
          Editor <span>Config</span>
        </h1>
      </div>
      <div className="header__profile">
        <button>
          <picture>
            <figure>
              <img src="" alt="" />
            </figure>
          </picture>
          <h2 className="profile__text">{name}</h2>
        </button>
        <Button label="로그아웃" onClick={handleClick} buttonType="default" />
      </div>
    </header>
  )
}

export default React.memo(Header, isEqual)
