import http from 'axios'

const getConfigInfo = async () => {
  return await http
    .request({
      url: `http://localhost:4000/api/config/info/prettier`,
      method: 'GET',
    })
    .then((res) => res.data)
}

const patchConfigInfo = async (form: any) => {
  return await http
    .request({
      url: 'http://localhost:4000/api/config/file',
      method: 'POST',
      data: form,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

export const ConfigInfoService = { getConfigInfo, patchConfigInfo }
