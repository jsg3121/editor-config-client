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

const validCheckEmail = async (value: string) => {
  if (value === '') {
    return {
      status: 400,
      description: '필수 입력사항 입니다',
    }
  }

  return await http
    .request({
      url: `http://localhost:4000/api/account/valid/email`,
      method: 'POST',
      data: { email: value },
    })
    .then((res) => {
      return res.data
    })
}

const validCheckName = async (value: string) => {
  if (value === '') {
    return {
      status: 400,
      description: '필수 입력사항 입니다',
    }
  }

  return await http
    .request({
      url: `http://localhost:4000/api/account/valid/name`,
      method: 'POST',
      data: { name: value },
    })
    .then((res) => {
      return res.data
    })
}

const validCheck = async (form: { value: string; type: string }) => {
  if (form.value === '') {
    return {
      status: 400,
      description: '필수 입력사항 입니다',
    }
  }

  return await http
    .request({
      url: `http://localhost:4000/api/account/valid/${form.type}`,
      method: 'POST',
      data: { [form.type]: form.value },
    })
    .then((res) => {
      return res.data
    })
}

export const AccountService = {
  login,
  logout,
  signup,
  validCheckEmail,
  validCheckName,
  validCheck,
}
