import CryptoJs from 'crypto-js'

const DECRYPT_SECRET_KEY = 'WkdTjsRb_decrypt_95)*)('
const ENCRYPT_SECRET_KEY = 'wKdtJsrB_encrypt_95)*)('
const LOCAL_ACCESS_NAME = 'editor_config_access_tk'
const LOCAL_REFRESH_NAME = 'editor_config_refresh_tk'

const encrypToken = (data: LoginResult) => {
  localStorage.setItem(
    LOCAL_ACCESS_NAME,
    CryptoJs.AES.encrypt(
      `{
        "date":"${Date.now()}",
        "accessToken":"${data.accessToken}",    
        "accessTokenExp":"${data.accessTokenExp}"
       }`,
      ENCRYPT_SECRET_KEY
    ).toString()
  )

  localStorage.setItem(
    LOCAL_REFRESH_NAME,
    CryptoJs.AES.encrypt(
      `{
        "date":"${Date.now()}",
        "accessToken":"${data.refreshToken}",    
        "accessTokenExp":"${data.refreshTokenExp}"
       }`,
      ENCRYPT_SECRET_KEY
    ).toString()
  )
}

export const TokenService = {
  encrypToken,
}
