import { Epic, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { TokenService } from '../../../../service'

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
