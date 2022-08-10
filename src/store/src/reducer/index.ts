import { combineReducers } from '@reduxjs/toolkit'
import account from './src/account.reducer'

const rootReducer = combineReducers({
  account,
})

export default rootReducer
