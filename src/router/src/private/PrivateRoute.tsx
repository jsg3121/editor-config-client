import React from 'react'
import isEqual from 'fast-deep-equal'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header } from '../../../container'
import { AddSetting, Detail, Main } from './src'
import { MobxProvider } from '../../../mobxStore'

const PrivateRoute: React.FC = () => {
  return (
    <>
      <Header />
      <MobxProvider>
        <Switch>
          <Route exact path="/board">
            <Main />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
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
      </MobxProvider>
    </>
  )
}

export default React.memo(PrivateRoute, isEqual)
