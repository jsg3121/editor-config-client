import { action, makeObservable, observable } from 'mobx'

export class ConfigStore {
  @observable public name: string = ''
  @observable public type: string = ''
  @observable public configDetail: ConfigTypes.IDetailes = {}
  @observable public configDescription: ConfigTypes.IDescription = {}
  @observable public selectDescription: {
    desc: string
    value: {
      [k in string]: string
    }
  } = { desc: '', value: {} }

  constructor() {
    makeObservable(this)
  }

  @action
  public changeConfig(label: string, value: string | boolean) {
    this.configDetail = { ...this.configDetail, [label]: value }
  }

  @action
  public initConfig(data: ConfigTypes.ConfigDataType) {
    this.configDetail = data.Options
    this.configDescription = data.Description
  }

  @action
  public description(value: keyof ConfigTypes.IDetailes) {
    this.selectDescription.desc = this.configDescription[value]?.desc || ''
    this.selectDescription.value = { ...this.configDescription[value]?.value }
  }
}
