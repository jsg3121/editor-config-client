import * as account from './src/account.action'
import * as token from './src/token.action'
import * as common from './src/common.action'

import { routerActions } from 'connected-react-router'

const Default = {
  account,
  token,
  common,
  routerActions,
}

export default Default

export * as accountActions from './src/account.action'
export * as tokenActions from './src/token.action'
export * as commonActions from './src/common.action'
export { routerActions } from 'connected-react-router'
