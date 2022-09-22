import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ConfigInfoService } from '../../../../service'
import { useSelector } from '../../../../store'
import '../../../../style/detail.scss'

type RouteParams = {
  id: string
}

type DetailType = {
  configName: string
  configType: string
  configDetail: {
    [key in string]: string
  }
  createDate: string
  updateDate?: string
}

const Detail: React.FC = () => {
  const { id } = useParams<RouteParams>()
  const { accessToken } = useSelector((store) => store.account)

  const { data } = useQuery<DetailType>([`/detail/${id}`], async () => {
    const result = await ConfigInfoService.getDetailConfig(id, accessToken)

    return {
      configName: result.data.configName,
      configType: result.data.configType,
      configDetail: JSON.parse(result.data.configDetail),
      createDate: result.data.createDate,
    }
  })

  React.useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section className="detail__container">
      <article className="detail__content">
        <div className="content__info">
          <h1 className="info--title">
            설정 명 : <span>{data && data.configName}</span>
          </h1>
          <h2 className="info--type">
            설정 타입 : <span>{data && data.configType}</span>
          </h2>
        </div>
        <div className="content__config">
          <ul className="config__list">
            {data &&
              Object.entries(data.configDetail).map((item, index) => {
                return (
                  <li className="config__list--item" key={index}>
                    <div>
                      <p className="config__item--title">{item[0]} :</p>
                      <p className="config__item--value">{String(item[1])}</p>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Detail
