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
      if (payload.status === 400) {
        return {
          type: '@@COMMON/MODALOPEN',
          payload: {
            type: 'danger',
            description: '계정 생성에 실패하였습니다.',
          },
        }
      }
      if (payload.status === 200) {
        return {
          type: '@@COMMON/MODALOPEN',
          payload: {
            type: 'primary',
            description: '계정을 생성했습니다.',
          },
        }
      }
    })
  )
}
