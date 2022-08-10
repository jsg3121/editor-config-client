import { createReducer } from '@reduxjs/toolkit'
import produce from 'immer'
import { accountActions } from '../../action'

export type AccountStateTypes = {
  isLoading: boolean
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
  isLoading: false,
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
    builder
      .addCase(accountActions.login.pending, (store, _) => {
        return produce(store, (draft) => {
          draft.isLoading = true
        })
      })
      .addCase(accountActions.login.fulfilled, (store, { payload }) => {
        return produce(store, (draft) => {
          draft.isLoading = false
        })
      })
      .addCase(accountActions.login.rejected, (store, { payload }) => {})
  }
)

export default accountReducer
