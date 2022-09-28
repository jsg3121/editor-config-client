import isEqual from 'fast-deep-equal'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header } from '../../../container'
import { MobxProvider } from '../../../mobxStore'
import { AddSetting, DetailPage, Main } from './src'

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
            <DetailPage />
          </Route>
          <Route exact path="/setting/edit/:id">
            <AddSetting />
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
