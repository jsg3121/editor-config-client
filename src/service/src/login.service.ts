import http from 'axios'

const login = async (form: LoginForm): Promise<LoginResult> => {
  return await http
    .request<LoginResult>({
      url: 'http://localhost:4000/api/account/login',
      method: 'POST',
      data: form,
    })
    .then((res) => {
      console.log(res)
      return res.data
    })
}

export const Service = {
  login,
}
