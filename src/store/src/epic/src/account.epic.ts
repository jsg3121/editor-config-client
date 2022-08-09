import { Epic, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { routerActions } from '../../action'

export const accountEpic: Epic = (action$, _) => {
  return action$.pipe(
    ofType('@@ACCOUNT/LOGIN/fulfilled'),
    map(async ({ payload }) => {
      console.log(payload)
      return routerActions.replace('/main')
    })
  )
}
