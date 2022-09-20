import isEqual from 'fast-deep-equal'
import React from 'react'
import { ReactComponent as PrettierIcon } from '../../../../assets/images/prettier.svg'
import { Image } from '../../../../components'
import { BoardContext } from '../../../../context'

const ConfigList: React.FC = () => {
  const { configList } = React.useContext(BoardContext)

  return (
    <article className="dashboard__config-list">
      <h1 className="dashboard__config-list--title">내 설정 리스트</h1>
      {configList &&
        configList.map((item, index) => {
          return (
            <div key={index} className="config-list__items">
              <Image>
                <PrettierIcon width={80} height={80} />
              </Image>
              <p className="config-list__items--name">{item.configName}</p>
              <p className="config-list__items--type  ">{item.configType}</p>
            </div>
          )
        })}
    </article>
  )
}

export default React.memo(ConfigList, isEqual)
