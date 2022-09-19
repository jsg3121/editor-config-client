declare global {
  type User = {
    id: number
    name: string
    email: string
    password: string
    createAt: Date
  }

  type SettingList = {
    configName: string
    configType: string
    configDetail: ConfigTypes.Idetailes
  }

  interface LoginRequestForm {
    email: string
    password: string
    isAutoLogin: boolean
  }

  type LoginResult = {
    status: number
    description: string
    data: {
      isLogin: boolean
      accessToken: string
      accessTokenExp: string
      refreshToken: string
      refreshTokenExp: string
      email: string
      name: string
      id: number
    }
  }

  type SignUpRequestForm = {
    email: string
    name: string
    password: string
  }

  type SignUpResult = {
    status: number
    description: string
  }

  type LogoutRequestForm = string

  type LogoutResult = {
    isLogin: boolean
  }

  type TokenRequsetForm = {
    accessToken: string
    refreshToken: string
  }

  type TokenResult = {
    status: number
    description: string
    data: {
      isLogin: boolean
      newAccessToken?: string
      newAccessTokenExp?: string
      newRefreshToken?: string
      newRefreshTokenExp?: string
      email: string
      name: string
      id: number
    }
  }
}

export {}
