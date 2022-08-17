import http from 'axios'

const login = async (form: LoginRequestForm): Promise<LoginResult> => {
  return await http
    .request<LoginResult>({
      url: 'http://localhost:4000/api/account/login',
      method: 'POST',
      data: form,
    })
    .then((res) => {
      return {
        isAutoLogin: form.isAutoLogin,
        ...res.data,
      }
    })
}

const logout = async (form: LogoutRequestForm) => {
  return await http
    .request({
      url: 'http://localhost:4000/api/account/logout',
      method: 'POST',
      data: {
        accessToken: form,
      },
    })
    .then((res) => res.data)
}

export const LoginService = {
  login,
  logout,
}
