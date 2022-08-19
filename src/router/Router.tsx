import isEqual from 'fast-deep-equal'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Actions, useDispatch, useSelector } from '../store'
import { Main } from './src/private'
import { Login, SignUp } from './src/public'

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
  }, [])

  return (
    <>
      {isLogin && (
        <>
          <Routes>
            <Route path="/board" element={<Main />} />
            <Route path="*" element={<Navigate to={'/board'} replace />} />
          </Routes>
        </>
      )}
      {!isLogin && (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to={'/login'} replace />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default React.memo(Router, isEqual)
