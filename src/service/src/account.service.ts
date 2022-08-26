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

const signup = async (form: SignUpRequestForm): Promise<SignUpResult> => {
  return await http
    .request({
      url: 'http://localhost:4000/api/account/signup',
      method: 'POST',
      data: form,
    })
    .then((res) => {
      console.log(res.data)
      return res.data
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

const validCheck = async (form: ValidCheckForm) => {
  return await http
    .request({
      url: `http://localhost:4000/api/account/valid/${form.type}`,
      method: 'POST',
      data: { email: form.value },
    })
    .then((res) => {
      return res.data
    })
}

export const AccountService = {
  login,
  logout,
  signup,
  validCheck,
}
