import { Epic, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { TokenService } from '../../../../service'

export const accountEpic: Epic = (action$, _) => {
  return action$.pipe(
    ofType('@@ACCOUNT/LOGIN/fulfilled'),
    map(({ payload }) => {
      TokenService.encrypToken(payload)

      return {
        type: '',
      }
    })
  )
}
