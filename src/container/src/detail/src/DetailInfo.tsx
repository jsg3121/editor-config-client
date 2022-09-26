import React from 'react'
import isEqual from 'fast-deep-equal'

type DetailType = {
  configName: string
  configType: string
  configDetail: {
    [key in string]: string
  }
  createDate: string
  updateDate?: string
}

interface DetailInfoProps {
  data?: DetailType
}

const DetailInfo: React.FC<DetailInfoProps> = (props) => {
  const { data } = props

  return (
    <>
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
                      <p className="config__item--title">{item[0]}</p>
                      <p className="config__item--value">{String(item[1])}</p>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </article>
    </>
  )
}

export default React.memo(DetailInfo, isEqual)
