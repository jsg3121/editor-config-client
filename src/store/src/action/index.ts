import * as account from './src/account.action'
import * as token from './src/token.action'
import { routerActions } from 'connected-react-router'

const Default = {
  account,
  token,
  routerActions,
}

export default Default

export * as accountActions from './src/account.action'
export * as tokenActions from './src/token.action'
export { routerActions } from 'connected-react-router'
