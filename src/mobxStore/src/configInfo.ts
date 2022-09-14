import { action, makeObservable, observable } from 'mobx'

export class ConfigStore {
  @observable public name: string
  @observable public type: string
  @observable public configDetail: ConfigTypes.IDetailes

  constructor() {
    this.name = 'test'
    this.type = ''
    this.configDetail = {}

    makeObservable(this)
  }

  @action
  public changeConfig(label: keyof ConfigTypes.IDetailes, value: string) {
    console.log(label, value)
    this.configDetail = { [label]: value, ...this.configDetail }
  }

  @action
  public initConfig(data: any) {
    this.configDetail = data
  }
}
