import http from 'axios'
import CryptoJs from 'crypto-js'

const CRYPTO_SECRET_KEY = 'wKdtJsrB_encrypt_95)*)('
const LOCAL_ACCESS_NAME = 'editor_config_access_tk'
const LOCAL_REFRESH_NAME = 'editor_config_refresh_tk'

/**
 * info : 로그인 성공 후 토큰 암호화 로컬 스토리지 저장
 * @author 장선규 jsg3121
 * @param responseData 토큰
 */
const encrypToken = (responseData: LoginResult) => {
  const { data } = responseData
  if (data.accessToken && data.refreshToken) {
    localStorage.setItem(
      LOCAL_ACCESS_NAME,
      CryptoJs.AES.encrypt(
        `{
        "date":"${Date.now()}",
        "accessToken":"${data.accessToken}",    
        "accessTokenExp":"${data.accessTokenExp}"
       }`,
        CRYPTO_SECRET_KEY
      ).toString()
    )

    localStorage.setItem(
      LOCAL_REFRESH_NAME,
      CryptoJs.AES.encrypt(
        `{
        "date":"${Date.now()}",
        "refreshToken":"${data.refreshToken}",    
        "refreshTokenExp":"${data.refreshTokenExp}"
       }`,
        CRYPTO_SECRET_KEY
      ).toString()
    )
  }
}

/**
 * info : 토큰 복호화
 * @author 장선규 jsg3121
 * @returns [accessToken, refreshToken]
 */
const decryptToken = () => {
  const accessToken = localStorage.getItem(LOCAL_ACCESS_NAME) || ''
  const refreshToken = localStorage.getItem(LOCAL_REFRESH_NAME) || ''

  return [
    CryptoJs.AES.decrypt(accessToken, CRYPTO_SECRET_KEY).toString(
      CryptoJs.enc.Utf8
    ),
    CryptoJs.AES.decrypt(refreshToken, CRYPTO_SECRET_KEY).toString(
      CryptoJs.enc.Utf8
    ),
  ]
}

/**
 * info : 로그아웃시 로컬스토리지 저장된 데이터 삭제
 * @author 장선규 jsg3121
 */
const removeToken = () => {
  localStorage.removeItem(LOCAL_ACCESS_NAME)
  localStorage.removeItem(LOCAL_REFRESH_NAME)
}

/**
 * info : 자동로그인을 위한 로컬 스토리지 데이터
 * @author 장선규 jsg3121
 * @param requestData 로걸 스토리지 데이터
 */
const tokenCheck = async (requestData: TokenRequsetForm) => {
  return await http
    .request<TokenResult>({
      url: 'http://localhost:4000/api/account/tokencheck',
      method: 'POST',
      data: requestData,
    })
    .then((res) => {
      return res.data
    })
}

export const TokenService = {
  encrypToken,
  tokenCheck,
  decryptToken,
  removeToken,
}
