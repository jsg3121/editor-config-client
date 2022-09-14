import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch, useSelector } from '../store'
import { PrivateRoute } from './src/private'
import { PublicRoute } from './src/public'

const Router: React.FC = () => {
  const { isLogin } = useSelector((store) => store.account)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const requestData = {
      accessToken: localStorage.getItem('editor_config_access_tk') || '',
      refreshToken: localStorage.getItem('editor_config_refresh_tk') || '',
    }
    if (requestData.accessToken !== '' && requestData.refreshToken !== '') {
      dispatch(Actions.token.tokenCheck(requestData))
    }
  }, [dispatch])

  return (
    <>
      {isLogin && <PrivateRoute />}
      {!isLogin && <PublicRoute />}
    </>
  )
}

export default React.memo(Router, isEqual)
