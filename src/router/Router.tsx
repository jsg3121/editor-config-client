import isEqual from 'fast-deep-equal'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header } from '../container'
import { Actions, useDispatch, useSelector } from '../store'
import { AddSetting, Main } from './src/private'
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
  }, [dispatch])

  return (
    <>
      {isLogin && (
        <>
          <Header />
          <Switch>
            <Route exact path="/board">
              <Main />
            </Route>
            <Route exact path="/mypage">
              <Main />
            </Route>
            <Route exact path="/edit">
              <Main />
            </Route>
            <Route exact path="/setting/add">
              <AddSetting />
            </Route>
            <Route path="*">
              <Redirect to={{ pathname: '/board' }} />
            </Route>
          </Switch>
        </>
      )}
      {!isLogin && (
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            <Redirect to={{ pathname: '/login' }} />
          </Route>
        </Switch>
      )}
    </>
  )
}

export default React.memo(Router, isEqual)
