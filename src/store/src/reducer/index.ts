import { combineReducers } from '@reduxjs/toolkit'
import account, { AccountStateTypes } from './src/account.reducer'

export type RootState = {
  account: AccountStateTypes
}

const rootReducer = combineReducers({
  account,
})

export default rootReducer
