declare global {
  type User = {
    id: number
    name: string
    email: string
    password: string
    createAt: Date
  }

  type SettingList = {
    id: number
    userId: number
    configType: string
    configDetail: string
    createAt: Date
    updateAt: Date
  }
}

export default {}
