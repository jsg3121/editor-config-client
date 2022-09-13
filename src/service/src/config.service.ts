import http from 'axios'

const getConfigInfo = async () => {
  return await http
    .request({
      url: `http://localhost:4000/api/config/info/prettier`,
      method: 'GET',
    })
    .then((res) => res.data)
}

export const ConfigInfoService = { getConfigInfo }
