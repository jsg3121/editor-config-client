import { createReducer } from '@reduxjs/toolkit'
import { accountActions } from '../../action'

export type AccountStateTypes = {
  isLogin: boolean
  email: User['email']
  name: User['name']
  id: User['id']
  accessToken: string
  accessTokenExp: string
  refreshToken: string
  refreshTokenExp: string
}

const accountState: AccountStateTypes = {
  accessToken: '',
  accessTokenExp: '',
  email: 'sdfgsdfg  d',
  id: 0,
  name: '',
  isLogin: false,
  refreshToken: '',
  refreshTokenExp: '',
}

const accountReducer = createReducer<AccountStateTypes>(
  accountState,
  (builder) => {
    builder.addCase(accountActions.login, (store, { payload }) => {
      console.log(store)
    })
  }
)

export default accountReducer
