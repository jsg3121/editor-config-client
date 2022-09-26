import http from 'axios'
import { RegExp } from '../../common'

/**
 * info : 로그인 요청 Api
 * @param form 로그인 요청 폼
 * @returns
 */
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

/**
 * info : 회원가입 요청 api
 * @param form 회원가입 요청 폼
 * @returns
 */
const signup = async (form: SignUpRequestForm): Promise<SignUpResult> => {
  const { email, password } = form

  if (!RegExp.email.test(email) || !RegExp.password.test(password)) {
    throw new Error()
  }

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

/**
 * info : 로그아웃 api
 * @param form 로그아웃 요청 폼
 * @returns
 */
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

/**
 * info : 회원가입 등 입력 형식에 맞추어야 할 때 DB 중복 체크 api
 * @param form valid 체크하기 위한 문자열과 타입
 * @returns
 */
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
  validCheck,
}
