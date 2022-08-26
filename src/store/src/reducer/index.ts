import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import account from './src/account.reducer'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  account,
  router: connectRouter(history),
})

export default rootReducer
