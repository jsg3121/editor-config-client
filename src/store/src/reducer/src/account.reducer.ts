import { createReducer, isAnyOf } from '@reduxjs/toolkit'
import produce from 'immer'
import { TokenService } from '../../../../service'
import { accountActions, tokenActions } from '../../action'

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
  isError?: string
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
      .addCase(accountActions.login.fulfilled, (store, { payload }) => {
        console.log(payload)
        return produce(store, (draft) => {
          if (payload.status === 200) {
            draft.isLoading = false
            draft.isLogin = payload.data.isLogin
            draft.accessToken = payload.data.accessToken
            draft.refreshToken = payload.data.refreshToken
            draft.accessTokenExp = payload.data.accessTokenExp
            draft.refreshTokenExp = payload.data.refreshTokenExp
            draft.email = payload.data.email
            draft.name = payload.data.name
          } else {
            draft.isLoading = false
            draft.isLogin = payload.data.isLogin
            draft.isError = payload.description
          }
        })
      })
      .addCase(tokenActions.tokenCheck.fulfilled, (store, { payload }) => {
        const [access, refresh] = TokenService.decryptToken()

        return produce(store, (draft) => {
          draft.isLoading = false
          draft.isLogin = payload.data.isLogin
          draft.email = payload.data.email
          draft.name = payload.data.name
          draft.accessToken = JSON.parse(access).accessToken
          draft.accessTokenExp = JSON.parse(access).accessTokenExp
          draft.refreshToken = JSON.parse(refresh).refreshToken
          draft.refreshTokenExp = JSON.parse(refresh).refreshTokenExp
        })
      })
      .addCase(accountActions.logout.fulfilled, (store, { payload }) => {
        TokenService.removeToken()

        return produce(store, (draft) => {
          draft.isLogin = payload.isLogin
          draft.isLoading = false
          draft.email = ''
          draft.name = ''
          draft.accessToken = ''
          draft.accessTokenExp = ''
          draft.refreshToken = ''
          draft.refreshTokenExp = ''
        })
      })
      .addCase(accountActions.clear, (store) => {
        return produce(store, (draft) => {
          draft.isError = undefined
          draft.isLoading = false
          draft.isLogin = false
          draft.email = ''
          draft.name = ''
          draft.accessToken = ''
          draft.accessTokenExp = ''
          draft.refreshToken = ''
          draft.refreshTokenExp = ''
        })
      })
      .addMatcher(
        isAnyOf(
          accountActions.login.pending,
          tokenActions.tokenCheck.pending,
          accountActions.logout.pending
        ),
        (store) => {
          return produce(store, (draft) => {
            draft.isLoading = true
          })
        }
      )
      .addMatcher(
        isAnyOf(
          accountActions.login.rejected,
          tokenActions.tokenCheck.rejected,
          accountActions.logout.rejected
        ),
        (store) => {
          return produce(store, (draft) => {
            draft.isLoading = false
            draft.isLogin = false
          })
        }
      )
  }
)

export default accountReducer
