import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import account, { AccountStateTypes } from './src/account.reducer'

export type RootState = {
  account: AccountStateTypes
}

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  account,
  router: connectRouter(history),
})

export default rootReducer
