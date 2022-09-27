import http from 'axios'

/**
 * info : 사용하려는 config 설정 옵션 및 설명 정보 요청 api
 * @returns
 */
const getConfigInfo = async (): Promise<ConfigTypes.ConfigDataType> => {
  return await http
    .request<ConfigTypes.ConfigDataType>({
      url: `http://localhost:4000/api/config/info/prettier`,
      method: 'GET',
    })
    .then((res) => res.data)
}

/**
 * info : config setting 추가 또는 업데이트 api
 * @param form 추가 할 config 폼
 * @returns
 */
const createConfigInfo = async (form: ConfigTypes.RequestConfigType) => {
  const { data, method, token } = form

  return await http
    .request({
      url: 'http://localhost:4000/api/config/file',
      method: method,
      data: data,
      headers: {
        'Content-Type': 'application/JSON',
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

/**
 * info : config setting 데이터 요청 api
 * @param id 사용자 id
 * @param accessToken 요청시 헤더 토큰값
 * @returns
 */
const getConfigList = async (id: number, accessToken: string) => {
  return await http
    .request<ConfigTypes.ResponseConfigList>({
      url: `http://localhost:4000/api/config/file/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/JSON',
        authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

/**
 * info : 사용자의 단일 config setting 정보 요청
 * @param id 해당 config setting id
 * @param accessToken 요청시 헤더 토큰값
 * @returns
 */
const getDetailConfig = async (id: string, accessToken: string) => {
  return await http
    .request<ConfigTypes.ResponseDetailConfig>({
      url: `http://localhost:4000/api/config/detail/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/JSON',
        authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

/**
 * info : config setting 삭제 api
 * @param data 삭제하려는 config id, user id, token
 * @returns
 */
const deleteDetailConfig = async (data: ConfigTypes.RequestDeleteConfig) => {
  const { accessToken, id, userId } = data
  return await http.request({
    url: `http://localhost:4000/api/config/delete/${userId}/${id}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/JSON',
      authorization: `Bearer ${accessToken}`,
    },
  })
}

const patchDetailConfig = async (form: ConfigTypes.RequestConfigType) => {
  const { data, token } = form
  return await http
    .request({
      url: 'http://localhost:4000/api/config/file',
      method: 'PATCH',
      data: data,
      headers: {
        'Content-Type': 'application/JSON',
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

export const ConfigInfoService = {
  getConfigInfo,
  createConfigInfo,
  getConfigList,
  getDetailConfig,
  deleteDetailConfig,
}
