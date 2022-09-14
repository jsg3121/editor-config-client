import { makeObservable, observable } from 'mobx'
import { ConfigStore } from './configInfo'

export class RootStore {
  // @observable public store: ConfigTypes.RootStoreType
  @observable public config: ConfigStore

  constructor() {
    this.config = new ConfigStore()
    makeObservable(this)
  }
}
