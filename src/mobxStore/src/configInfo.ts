import { action, makeObservable, observable } from 'mobx'

/**
 * info : Config setting에 대한 store
 *
 * name : config 파일 명
 *
 * type : config type
 *
 * configDetail : 해당 타입 옵션
 *
 * configDescription : 옵션들에 대한 설명
 *
 * selectDetail : detail페이지에 표시되는 선택된 옵션들에 대한 정보
 *
 * selectDescription : 선택된 옵션에 대한 설명
 */
export class ConfigStore {
  @observable public name: string = ''
  @observable public type: string = ''
  @observable public configDetail: ConfigTypes.IDetails = {}
  @observable public configDescription: ConfigTypes.IDescription = {}
  @observable public selectDetail: {
    configName: string
    configType: string
    configDetail: {
      [key: string]: string | number | boolean
    }
  } = {
    configDetail: {},
    configName: '',
    configType: '',
  }
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
    this.configDescription = data.Description
  }

  @action
  public description(value: keyof ConfigTypes.IDetails) {
    this.selectDescription.desc = this.configDescription[value]?.desc || ''
    this.selectDescription.value = { ...this.configDescription[value]?.value }
  }

  @action
  public initSelectDetail(data: ConfigTypes.DetailDataType) {
    this.selectDetail = data
  }

  @action
  public clear() {
    this.configDetail = {}
    this.selectDetail = {
      configName: '',
      configType: '',
      configDetail: {},
    }
  }
}
