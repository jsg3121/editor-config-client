import isEqual from 'fast-deep-equal'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login, SignUp } from './src'

const PublicRoute: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default React.memo(PublicRoute, isEqual)
