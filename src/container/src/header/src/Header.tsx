import isEqual from 'fast-deep-equal'
import React from 'react'
import { ReactComponent as ProfileIcon } from '../../../../assets/images/profile.svg'
import { Button, Dropdown } from '../../../../component'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/header.scss'

const Header: React.FC = () => {
  const { name, accessToken } = useSelector((store) => store.account)

  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    dispatch(Actions.account.logout(accessToken))
  }, [])

  const profile = React.useMemo(() => {
    return (
      <button className="profile__icon">
        <picture>
          <figure>
            <ProfileIcon width={20} height={20} fill="#dddddd" />
          </figure>
        </picture>
        <h2 className="profile__text">{name}</h2>
      </button>
    )
  }, [])

  return (
    <header className="header">
      <div className="header__logo">
        <h1>
          Editor <span>Config</span>
        </h1>
      </div>
      <div className="header__profile">
        <Dropdown
          options={[
            {
              key: 'logout',
              label: (
                <Button
                  label="로그아웃"
                  onClick={handleClick}
                  buttonType="default"
                  size="small"
                />
              ),
            },
          ]}
        >
          {profile}
        </Dropdown>
      </div>
    </header>
  )
}

export default React.memo(Header, isEqual)
