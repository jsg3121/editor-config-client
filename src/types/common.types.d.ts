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

  interface LoginForm {
    email: string
    password: string
    isAutoLogin: boolean
  }

  type LoginRequestForm = {
    email: string
    password: string
  }

  type LoginResult = {
    isLogin: boolean
    accessToken: string
    accessTokenExp: string
    refreshToken: string
    refreshTokenExp: string
    email: string
    name: string
  }
}

export default {}
