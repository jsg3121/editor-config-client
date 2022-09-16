import isEqual from 'fast-deep-equal'
import React from 'react'
import { ReactComponent as ProfileIcon } from '../../../../assets/images/profile.svg'
import { Button, Dropdown } from '../../../../components'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/header.scss'

const Header: React.FC = () => {
  const { name, accessToken } = useSelector((store) => store.account)

  const dispatch = useDispatch()

  const handleClickLogout = React.useCallback(() => {
    dispatch(Actions.account.logout(accessToken))
  }, [accessToken, dispatch])

  const handleClickMypage = React.useCallback(() => {
    dispatch(Actions.routerActions.push('/mypage'))
  }, [dispatch])

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
              key: 'mypage',
              label: (
                <Button
                  label="마이페이지"
                  onClick={handleClickMypage}
                  buttonType="primary"
                  size="small"
                />
              ),
            },
            {
              key: 'logout',
              label: (
                <Button
                  label="로그아웃"
                  onClick={handleClickLogout}
                  buttonType="danger"
                  size="small"
                />
              ),
            },
          ]}
        >
          <button className="profile__icon">
            <picture>
              <figure>
                <ProfileIcon width={20} height={20} fill="#dddddd" />
              </figure>
            </picture>
            <h2 className="profile__text">{name}</h2>
          </button>
        </Dropdown>
      </div>
    </header>
  )
}

export default React.memo(Header, isEqual)
