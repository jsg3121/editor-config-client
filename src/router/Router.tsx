import isEqual from 'fast-deep-equal'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from '../store'
import { Main } from './src/private'
import { Login } from './src/public'

const Router: React.FC = () => {
  const { isLogin } = useSelector((store) => store.account)
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
            <Route path="*" element={<Navigate to={'/login'} replace />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default React.memo(Router, isEqual)
