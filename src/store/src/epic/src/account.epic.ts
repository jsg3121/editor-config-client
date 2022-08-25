import { Epic, ofType } from 'redux-observable'
import { debounceTime, filter, map } from 'rxjs/operators'
import { AccountService, TokenService } from '../../../../service'

export const loginEpic: Epic = (action$, _) => {
  return action$.pipe(
    ofType('@@ACCOUNT/LOGIN/fulfilled'),
    map(({ payload }) => {
      if (payload.isAutoLogin === true) {
        TokenService.encrypToken(payload)
      }
      return {
        type: '',
      }
    })
  )
}

export const signupEpic: Epic = (action$, _) => {
  return action$.pipe(
    ofType('@@ACCOUNT/SIGNUP/fulfilled'),
    map(({ payload }) => {
      return {
        type: '',
      }
    })
  )
}

export const validCheck: Epic = (action$, _) => {
  return action$.pipe(
    ofType('@@ACCOUNT/VALIDCHECK'),
    debounceTime(1000),
    map(({ payload }) => {
      AccountService.validCheck(payload)
      return {
        type: '',
      }
    })
  )
}
