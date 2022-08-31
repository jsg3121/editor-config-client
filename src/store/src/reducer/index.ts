import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import account from './src/account.reducer'
import common from './src/common.reducer'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  account,
  common,
  router: connectRouter(history),
})

export default rootReducer
