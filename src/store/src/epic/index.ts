import { combineEpics } from 'redux-observable'
import * as accountEpic from './src/account.epic'

export default combineEpics(...Object.values(accountEpic))
