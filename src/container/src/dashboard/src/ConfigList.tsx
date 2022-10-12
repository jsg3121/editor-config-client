import isEqual from 'fast-deep-equal'
import React from 'react'
import { ConfigCard, Loading } from '../../../../components'
import { BoardContext } from '../../../../context'
import { Actions, useDispatch } from '../../../../store'

const ConfigList: React.FC = () => {
  const { configList, isLoading = false } = React.useContext(BoardContext)

  const dispatch = useDispatch()

  const handleClickDetail = React.useCallback(
    (id: number | string) => {
      dispatch(Actions.routerActions.push(`/detail/${id}`))
    },
    [dispatch]
  )

  return (
    <article className="dashboard__config-list">
      <h1 className="dashboard__title">내 설정 리스트</h1>
      {configList &&
        configList.map((item, index) => {
          return (
            <ConfigCard
              key={index}
              configId={item.id}
              configName={item.configName}
              configType={item.configType}
              onClick={handleClickDetail}
            />
          )
        })}
      {isLoading && <Loading />}
    </article>
  )
}

export default React.memo(ConfigList, isEqual)
