import { action, makeObservable, observable } from 'mobx'

export class ConfigStore {
  @observable public name: string = ''
  @observable public type: string = ''
  @observable public configDetail: ConfigTypes.IDetailes = {}

  constructor() {
    makeObservable(this)
  }

  @action
  public changeConfig(label: string, value: string | boolean) {
    this.configDetail = { ...this.configDetail, [label]: value }
  }

  @action
  public initConfig(data: ConfigTypes.IDetailes) {
    this.configDetail = data
  }
}
